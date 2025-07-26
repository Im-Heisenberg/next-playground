import db from "@/db";
import slugify from "slugify";
import fs from "fs";
import xss from "xss";

export async function getMeals() {
	// synthetic delay
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare(`select * from meals`).all();
}

export function getMeal(slug) {
	return db.prepare(`select * from meals where slug =?`).get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;
	//1. create stream -->'pipe' where data will be sent to
	const stream = fs.createWriteStream(`public/images/${fileName}`);
	// 2. convert file to rray buffer
	const bufferedImage = await meal.image.arrayBuffer();
	//3. write stream by converting array buffer to node buffer
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new error("Saving image failed");
		}
	});
	meal.image = `/images/${fileName}`;

	db.prepare(
		`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
	).run(meal);
}

import db from "@/db";

export async function getMeals() {
	// synthetic delay
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare(`select * from meals`).all();
}

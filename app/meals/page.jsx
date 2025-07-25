import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meal";
import Loading from "./loading";

async function Meals() {
	const meals = await getMeals();

	return <MealsGrid meals={meals} />;
}
async function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					<span className={classes.highlight}>
						Excepturi numquam voluptatibus
					</span>
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Facilis, asperiores.
				</p>
				<p className={classes.cta}>
					<Link href={"/meals/share"}>Share your recepie</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<Loading />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}

export default MealsPage;

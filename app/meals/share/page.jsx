"use client";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMealAction } from "@/lib/actions";
import MealSubmit from "@/components/meals/meal-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
	const [state, action] = useActionState(shareMealAction, { message: null });
	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your{" "}
					<span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={action}>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" required />
						</p>
						<p>
							<label htmlFor="email">Your email</label>
							<input type="email" id="email" name="email" required />
						</p>
					</div>
					<p>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required />
					</p>
					<p>
						<label htmlFor="summary">Short Summary</label>
						<input type="text" id="summary" name="summary" required />
					</p>
					<p>
						<label htmlFor="instructions">Instructions</label>
						<textarea
							id="instructions"
							name="instructions"
							rows="10"
							required
						></textarea>
					</p>
					<ImagePicker name="image" label="Picture" />
					<p className={classes.actions}>
						<MealSubmit />
					</p>
					{state.message && <p>{state.message}</p>}
				</form>
			</main>
		</>
	);
}

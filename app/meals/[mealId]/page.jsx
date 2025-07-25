import React from "react";

async function Meal({ params }) {
	const { mealId } = await params;
    return <div>{mealId}</div>;
}

export default Meal;

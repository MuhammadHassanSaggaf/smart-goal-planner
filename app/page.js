"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import AddGoalForm from "./components/AddGoalForm";
import GoalList from "./components/GoalList"; 
import api from "./services/api"

const Page = () => {
	const [goals, setGoals] = useState([]);

	useEffect(() => {
		fetch("https://json-goals.onrender.com/goals")
			.then((r) => r.json())
			.then(setGoals)
			.catch(console.error);
	}, []);

	const handleAdd = (newGoal) => {
		fetch("https://json-goals.onrender.com/goals", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newGoal),
		})
			.then((r) => r.json())
			.then((saved) => setGoals((prev) => [...prev, saved]))
			.catch(console.error);
	};

	const handleUpdate = (id, updates) => {
		fetch(`https://json-goals.onrender.com/goals/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updates),
		})
			.then((r) => r.json())
			.then((updated) =>
				setGoals((prev) => prev.map((g) => (g.id === id ? updated : g))),
			)
			.catch(console.error);
	};

	const handleDelete = (id) => {
		fetch(`https://json-goals.onrender.com/goals/${id}`, { method: "DELETE" })
			.then(() => setGoals((prev) => prev.filter((g) => g.id !== id)))
			.catch(console.error);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<NavBar />

			<main className="flex-grow p-6 bg-gray-50">
				<Overview goals={goals} />
				<AddGoalForm onAdd={handleAdd} />

				<GoalList
					goals={goals}
					onDeposit={(id, amount) => handleUpdate(id, { savedAmount: amount })}
					onDelete={handleDelete}
					onEdit={(id, updates) => handleUpdate(id, updates)}
				/>
			</main>

			<Footer />
		</div>
	);
};

export default Page;

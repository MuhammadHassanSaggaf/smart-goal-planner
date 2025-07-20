import { useState } from "react";

const AddGoalForm = ({ onAdd }) => {
	const [form, setForm] = useState({
		name: "",
		targetAmount: "",
		category: "",
		deadline: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newGoal = {
			name: form.name,
			targetAmount: Number(form.targetAmount),
			category: form.category,
			deadline: form.deadline,
			savedAmount: 0,
			createdAt: new Date().toISOString().split("T")[0],
		};
		onAdd(newGoal);
		setForm({ name: "", targetAmount: "", category: "", deadline: "" });
	};

	return (
		<form onSubmit={handleSubmit} className="my-4 p-4 bg-white rounded shadow">
			<h2 className="text-lg font-medium mb-2">Add New Goal</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={form.name}
				onChange={handleChange}
				required
				className="block w-full mb-2 p-2 border rounded"
			/>
			<input
				type="number"
				name="targetAmount"
				placeholder="Target Amount"
				value={form.targetAmount}
				onChange={handleChange}
				required
				className="block w-full mb-2 p-2 border rounded"
			/>
			<input
				type="text"
				name="category"
				placeholder="Category"
				value={form.category}
				onChange={handleChange}
				className="block w-full mb-2 p-2 border rounded"
			/>
			<input
				type="date"
				name="deadline"
				value={form.deadline}
				onChange={handleChange}
				required
				className="block w-full mb-4 p-2 border rounded"
			/>
			<button
				type="submit"
				className="px-4 py-2 bg-blue-600 text-white rounded"
			>
				Add Goal
			</button>
		</form>
	);
};

export default AddGoalForm;

import { useState } from "react";
import ProgressBar from "./ProgressBar";

const GoalList = ({ goals, onDeposit, onDelete, onEdit }) => (
	<div className="space-y-4">
		{goals.map((goal) => (
			<div key={goal.id} className="p-4 bg-white rounded shadow">
				<h3 className="text-lg font-semibold">{goal.name}</h3>
				<ProgressBar saved={goal.savedAmount} target={goal.targetAmount} />
				<p>
					${goal.savedAmount} / ${goal.targetAmount}
				</p>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						const amt = Number(e.target.elements.amount.value);
						onDeposit(goal.id, goal.savedAmount + amt);
						e.target.reset();
					}}
					className="mt-2 flex items-center space-x-2"
				>
					<input
						name="amount"
						type="number"
						placeholder="Deposit"
						className="w-24 p-1 border rounded"
						required
					/>
					<button className="px-3 py-1 bg-green-500 text-white rounded">
						Save
					</button>
				</form>

				<div className="mt-2 flex space-x-4">
					<button onClick={() => onEdit(goal.id /* your edit logic */)}>
						Edit
					</button>
					<button onClick={() => onDelete(goal.id)} className="text-red-600">
						Delete
					</button>
				</div>
			</div>
		))}
	</div>
);

export default GoalList;

import { differenceInDays, parseISO } from "date-fns";



const Overview = ({ goals }) => {
	const totalGoals = goals.length;
	const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
	const completed = goals.filter(
		(goal) => goal.savedAmount >= goal.targetAmount,
	).length;

	return (
		<section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
			{/* Summary Cards */}
			<div className="p-4 bg-white rounded shadow">
				<h3>Total Goals</h3>
				<p>{totalGoals}</p>
			</div>
			<div className="p-4 bg-white rounded shadow">
				<h3>Total Saved</h3>
				<p>${totalSaved}</p>
			</div>
			<div className="p-4 bg-white rounded shadow">
				<h3>Completed</h3>
				<p>{completed}</p>
			</div>

			{/* Deadline List */}
			{goals.map((goal) => {
				const days = differenceInDays(parseISO(goal.deadline), new Date());
				let status, colorClass;
				if (days < 0) {
					status = "Overdue";
					colorClass = "text-red-600";
				} else if (days <= 30) {
					status = "Due soon";
					colorClass = "text-yellow-600";
				} else {
					status = "On track";
					colorClass = "text-green-600";
				}

				return (
					<div
						key={goal.id}
						className={`col-span-full p-4 bg-white rounded shadow flex justify-between`}
					>
						<span>{goal.name}</span>
						<span className={`${colorClass}`}>
							{status} ({Math.abs(days)} days {days < 0 ? "ago" : "left"})
						</span>
					</div>
				);
			})}
		</section>
	);
};

export default Overview;
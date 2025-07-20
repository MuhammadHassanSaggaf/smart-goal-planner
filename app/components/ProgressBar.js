"use client";

const ProgressBar = ({ current, target }) => {
	const percentage = Math.min((current / target) * 100, 100);

	return (
		<div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
			<div
				className="bg-green-500 h-full transition-all duration-300"
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;

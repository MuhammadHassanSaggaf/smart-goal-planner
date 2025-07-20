const API_URL = "https://json-goals.onrender.com/goals";

const api = {
	getGoals: async () => {
		const res = await fetch(API_URL);
		return res.json();
	},

	addGoal: async (goal) => {
		const res = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(goal),
		});
		return res.json();
	},

	updateGoal: async (id, updates) => {
		const res = await fetch(`${API_URL}/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updates),
		});
		return res.json();
	},

	deleteGoal: async (id) => {
		await fetch(`${API_URL}/${id}`, {
			method: "DELETE",
		});
	},
};

export default api;

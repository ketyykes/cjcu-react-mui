import axios from "axios";

export const instance = axios.create({
	baseURL: "http://localhost:3004",
	headers: {
		"Content-Type": "application/json",
	},
});

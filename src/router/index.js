import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import FavoritePage from "../pages/FavoritePage.jsx";
import NotFound from "../pages/NotFound.jsx";

import axios from "axios";

async function fetchPopular() {
	try {
		const config = {
			method: "get",
			url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=zh-TW`,
		};
		return await axios(config);
	} catch (error) {
		console.log(error);
		return [];
	}
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		loader: fetchPopular,
		errorElement: <NotFound />,
	},
	{
		path: "/favorite",
		element: <FavoritePage />,
	},
]);
export default router;

import axios, { AxiosResponse } from "axios";
import { MovieResponse } from "../types";

const MovieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b8d2306596fe57237fd0bc65ef06f9c7";

const getTrendingVideos = async (): Promise<AxiosResponse<MovieResponse>> => {
	try {
		const response: AxiosResponse<MovieResponse> =
			await axios.get<MovieResponse>(
				`${MovieBaseUrl}/trending/all/day?api_key=${api_key}`,
			);
		return response;
	} catch (error) {
		console.error("Error fetching trending videos:", error);
		throw error;
	}
};

export default getTrendingVideos;

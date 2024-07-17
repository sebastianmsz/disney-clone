import axios, { AxiosResponse } from "axios";
import { MovieResponse } from "../types";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b8d2306596fe57237fd0bc65ef06f9c7";

export const getTrendingMovies = async (): Promise<
	AxiosResponse<MovieResponse>
> => {
	try {
		const response: AxiosResponse<MovieResponse> =
			await axios.get<MovieResponse>(
				`${movieBaseUrl}/trending/all/day?api_key=${api_key}`,
			);
		return response;
	} catch (error) {
		console.error("Error fetching trending movies:", error);
		throw error;
	}
};

export const getMovieByGenre = async (
	id: number,
): Promise<AxiosResponse<MovieResponse>> => {
	try {
		const response: AxiosResponse<MovieResponse> =
			await axios.get<MovieResponse>(
				`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${String(id)}`,
			);
		return response;
	} catch (error) {
		console.error("Error fetching movies by genre:", error);
		throw error;
	}
};

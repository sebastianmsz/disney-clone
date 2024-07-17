import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b8d2306596fe57237fd0bc65ef06f9c7";
export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
        return response;
    }
    catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
};
export const getMovieByGenre = async (id) => {
    try {
        const response = await axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${String(id)}`);
        return response;
    }
    catch (error) {
        console.error("Error fetching movies by genre:", error);
        throw error;
    }
};

import axios, { AxiosResponse } from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "2ec8d66f5bdf1dd12eefaa723f1479cf";

const getTrendingVideos = async (): Promise<AxiosResponse> => {
	return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`);
};

export default getTrendingVideos;

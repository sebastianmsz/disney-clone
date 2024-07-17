function LgMovieCard({ movie }: { movie: Movie }): JSX.Element {
	return (
		<>
			{movie.poster_path ? (
				<img
					className="rounded-lg w-full md:w-[252px] cursor-pointer hover:scale-105
					transition-all duration-300 ease-in-out inset-border box-s border-gray-200
					border-4 border-opacity-0 hover:border-opacity-100"
					src={IMAGE_BASE_URL + (movie.backdrop_path ?? "")}
				/>
			) : (
				<>No poster available</>
			)}
		</>
	);
}

import { Movie } from "../types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default LgMovieCard;

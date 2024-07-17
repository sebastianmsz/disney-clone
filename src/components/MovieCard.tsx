import { Movie } from "../types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard({ movie }: { movie: Movie }): JSX.Element {
	return (
		<>
			{movie.poster_path ? (
				<img
					src={`${IMAGE_BASE_URL}${movie.poster_path}`}
					alt={`${movie.title} poster`}
					className="w-[160px] md:w-[200px] rounded-lg z-10 hover:scale-105
					transition-all duration-200 ease-in cursor-pointer border-gray-200
					border-4 border-opacity-0 hover:border-opacity-100 box-s"
				/>
			) : (
				<>No poster available</>
			)}
		</>
	);
}

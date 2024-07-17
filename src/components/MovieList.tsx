import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getMovieByGenre } from "../services/global-api";
import { Movie } from "../types";
import LgMovieCard from "./LgMovieCard";

export default function MovieList({
	genreId,
	index_,
}: {
	genreId: number;
	index_: number;
}): JSX.Element {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const fetchMoviesByGenre = async (): Promise<void> => {
		try {
			const response = await getMovieByGenre(genreId);
			setMovieList(response.data.results);
		} catch (error) {
			console.error("Error fetching trending movies by genre:", error);
		}
	};

	useEffect(() => {
		void fetchMoviesByGenre();
	});

	return (
		<div className="relative">
			<div className="flex gap-5 z-10">
				{movieList.map((item, index) => (
					<>
						{index_ % 3 == 0 ? (
							<LgMovieCard key={index} movie={item} />
						) : (
							<MovieCard key={index} movie={item} />
						)}
					</>
				))}
			</div>
		</div>
	);
}

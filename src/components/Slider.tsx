import { getTrendingMovies } from "../services/global-api";
import { useEffect, useState } from "react";
import { Movie } from "../types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

export default function Slider(): JSX.Element {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const fetchTrendingMovies = async (): Promise<void> => {
			try {
				const response = await getTrendingMovies();
				setMovieList(response.data.results);
			} catch (error) {
				console.error("Error fetching trending videos:", error);
			}
		};

		void fetchTrendingMovies();
	}, []);

	const handlePrev = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? movieList.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === movieList.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const handleIndicatorClick = (index: number): void => {
		setCurrentIndex(index);
	};

	return (
		<div className="relative w-full px-10 md:px-16 py-4 pb-10 overflow-hidden text-3xl">
			<HiChevronLeft
				className="absolute left-12 md:left-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-4xl"
				onClick={handlePrev}
			/>
			<HiChevronRight
				className="absolute right-12 md:right-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-4xl"
				onClick={handleNext}
			/>
			<div
				className="flex w-full transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${String(currentIndex * 100)}%)` }}
			>
				{movieList.map((movie) => (
					<div key={movie.id} className="min-w-full px-2 relative group">
						<img
							src={`${IMAGE_BASE_URL}${movie.backdrop_path ?? ""}`}
							alt="Image Poster"
							className="rounded-lg w-full md:h-[310px] object-cover relative box-s"
						/>
						<div className="hover-border !inset-y-0 !inset-x-2 opacity-0"></div>
					</div>
				))}
			</div>
			<div className="hidden absolute bottom-14 right-0 transform -translate-x-1/3 md:flex space-x-2">
				{movieList.map((_, index) => (
					<div
						key={index}
						className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${index === currentIndex ? "bg-gray-100" : "bg-gray-500"}`}
						onClick={() => {
							handleIndicatorClick(index);
						}}
					></div>
				))}
			</div>
		</div>
	);
}

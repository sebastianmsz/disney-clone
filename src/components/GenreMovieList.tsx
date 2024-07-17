import genresIds from "../constants/genres-ids";
import MovieList from "./MovieList";
import { useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function GenreMovieList(): JSX.Element {
	return (
		<div className="mt-4">
			<div>
				{genresIds.map((item, index) => {
					if (index > 4) return null;

					const elementRef = useRef<HTMLDivElement>(null);

					const slideRight = (): void => {
						if (elementRef.current) {
							elementRef.current.scrollLeft += 500;
						}
					};

					const slideLeft = (): void => {
						if (elementRef.current) {
							elementRef.current.scrollLeft -= 500;
						}
					};

					return (
						<div key={index} className="relative">
							<IoChevronBackOutline
								onClick={slideLeft}
								className={`text-[50px] text-white p-2 cursor-pointer 
								hidden md:block absolute z-20 top-1/2 transform 
								-translate-y-1/2 shadow-sm left-4`}
							/>
							<IoChevronForwardOutline
								onClick={slideRight}
								className={`text-[50px] text-white hidden md:block
								p-2 cursor-pointer z-20 right-4 top-1/2 transform 
								-translate-y-1/2 absolute shadow-sm`}
							/>
							<h2
								className="text-[20px] text-white font-bold absolute
								md:left-16 left-10"
							>
								{item.name}
							</h2>
							<div
								className="md:pl-16 p-10 relative overflow-x-auto 
								scroll-smooth no-scrollbar"
								ref={elementRef}
							>
								<div>
									<MovieList genreId={item.id} index_={index} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";

export default function App(): JSX.Element {
	return (
		<>
			<Header />
			<Slider />
			<ProductionHouse />
			<GenreMovieList />
		</>
	);
}

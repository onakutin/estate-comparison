import { Estate } from "./estateClass";
import { renderCard } from "./renderCard";

const showEstateLeft = async (id) => {
	// fetch details of the first estate
	const response = await fetch(
		`https://estate-comparison.codeboot.cz/detail.php?id=${id}`
	);
	const dataLeft = await response.json();
	const estateLeft = new Estate(dataLeft);
	renderCard("left", estateLeft, null, null, null);
};

export default showEstateLeft;

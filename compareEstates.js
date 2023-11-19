import { Estate } from "./estateClass";
import { renderCard } from "./renderCard";

const compareEstates = async (leftId, rightId) => {
	// fetch the first estate
	const responseLeft = await fetch(
		`https://estate-comparison.codeboot.cz/detail.php?id=${leftId}`
	);
	const dataLeft = await responseLeft.json();
	const estateLeft = new Estate(dataLeft);

	let priceLeft = estateLeft.price;
	let floorAreaLeft = estateLeft.building_area;
	let landAreaLeft = estateLeft.land_area;

	// fetch the second estate
	const responseRight = await fetch(
		`https://estate-comparison.codeboot.cz/detail.php?id=${rightId}`
	);
	const dataRight = await responseRight.json();
	const estateRight = new Estate(dataRight);

	let priceRight = estateRight.price;
	let floorAreaRight = estateRight.building_area;
	let landAreaRight = estateRight.land_area;

	// the logic of deciding the background color for the values comparison
	const compareProperty = (left, right) => {
		if (left > right) {
			return "right";
		} else if (right > left) {
			return "left";
		} else {
			return "both";
		}
	};

	const betterPrice = compareProperty(priceLeft, priceRight);
	const largerFloorArea = compareProperty(floorAreaRight, floorAreaLeft);
	const largerLandArea = compareProperty(landAreaLeft, landAreaRight);

	renderCard("left", estateLeft, betterPrice, largerFloorArea, largerLandArea);
	renderCard(
		"right",
		estateRight,
		betterPrice,
		largerFloorArea,
		largerLandArea
	);
};

export default compareEstates;

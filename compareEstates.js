import { Estate } from "./estateClass";
import { renderCard } from "./renderCard";

const compareEstates = async (leftId, rightId) => {
	// fetch the first estate
	const responseLeft = await fetch(
		`https://estate-comparison.codeboot.cz/detail.php?id=${leftId}`
	);
	const dataLeft = await responseLeft.json();
	const estateLeft = new Estate(dataLeft);
	console.log(estateLeft);

	let priceLeft = estateLeft.price;
	let floorAreaLeft = Number(estateLeft.building_area);
	let landAreaLeft = Number(estateLeft.land_area);

	// fetch the second estate
	const responseRight = await fetch(
		`https://estate-comparison.codeboot.cz/detail.php?id=${rightId}`
	);
	const dataRight = await responseRight.json();
	const estateRight = new Estate(dataRight);
	console.log(estateRight);

	let priceRight = estateRight.price;
	let floorAreaRight = Number(estateRight.building_area);
	let landAreaRight = Number(estateRight.land_area);

	// the logic of deciding the background color for the values comparison
	const compareProperty = (left, right) => {
		console.log(left, right);
		if (left > right) {
			console.log("right");
			return "right";
		} else if (right > left) {
			console.log("left");
			return "left";
		} else {
			return "both";
		}
	};

	const betterPrice = compareProperty(priceLeft, priceRight); // better price is lower price
	const largerFloorArea = compareProperty(floorAreaRight, floorAreaLeft); // better floorArea is higher floorArea
	const largerLandArea = compareProperty(landAreaRight, landAreaLeft); // better landArea is higher landArea

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

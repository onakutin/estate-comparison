export const renderCard = (
	side,
	estate,
	betterPrice,
	largerFloorArea,
	largerLandArea
) => {
	let priceBgr = "";
	let floorAreaBgr = "";
	let landAreaBgr = "";

	// decide the background based on better characteristics
	if (betterPrice === null) {
		priceBgr = "bgr";
	} else if (betterPrice === side) {
		priceBgr = "green";
	} else {
		priceBgr = "red";
	}

	if (largerFloorArea === null) {
		floorAreaBgr = "bgr";
	} else if (largerFloorArea === side) {
		floorAreaBgr = "green";
	} else {
		floorAreaBgr = "red";
	}

	if (largerLandArea === null) {
		landAreaBgr = "bgr";
	} else if (largerLandArea === side) {
		landAreaBgr = "green";
	} else {
		landAreaBgr = "red";
	}

	// render the estate
	const comparisonEstate = document.querySelector(
		".estate-comparison__" + side
	);
	comparisonEstate.classList.add("estate-facts");
	const logoHtml = estate.company_logo
		? `<img class="estate-company__logo" src=${estate.company_logo} alt="company_logo"><p>${estate.company_name}</p>`
		: "";
	comparisonEstate.innerHTML = `
            <img src=${estate.image}
            alt="estate"${estate.id}>
            <p>${estate.name}
            <div class="estate-fact estate-fact_${priceBgr}"><p><strong>Price:</strong></p><p>${estate.price.toLocaleString(
		"de-DE"
	)} K&#269;</div>
            <div class="estate-fact estate-fact__locality"><p><strong>Locality:</strong></p><p>${
							estate.locality
						}</div>
            <div class="estate-fact estate-fact_${floorAreaBgr}"><p><strong>Floor area:</strong></p><p>${
		estate.building_area
	} m&#178;</div>
            <div class="estate-fact estate-fact_${landAreaBgr}"><p><strong>Land area:</strong></p><p>${
		estate.land_area
	} m&#178;</div>
            <div class="estate-company">
            ${logoHtml}
            </div>
            `;
};

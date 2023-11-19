import compareEstates from "./compareEstates";
import {
	highlightFirstEstate,
	highlightSecondEstate,
	unchooseFirstEstate,
} from "./highlightFunctions";
import showEstateLeft from "./showEstateLeft";

const loadEstates = async (url) => {
	const response = await fetch(url);
	const data = await response.json();

	let leftEstateId = null;
	let rightEstateId = null;

	// render all estates
	data.forEach((estate) => {
		const listElm = document.querySelector(".estates-list");
		const estateElm = document.createElement("div");
		estateElm.classList.add("estate", "estate" + estate.id); // use the id for later selection
		estateElm.innerHTML = `<img class="estate__image" src="${estate.images[0]}"><p class="estate__text">${estate.name_extracted} ${estate.locality}`;
		listElm.appendChild(estateElm);

		const handleClick = () => {
			// if nothing chosen, choose this as the first estate 'A' and display the details
			if (leftEstateId == null) {
				showEstateLeft(estate.id);
				highlightFirstEstate(estate.id);
				leftEstateId = estate.id;
			} else {
				// if clicked on the estate 'A', unchoose it and clear the leftEstateId
				if (estate.id === leftEstateId) {
					unchooseFirstEstate(estate.id);
					leftEstateId = null;
				} else {
					// if estate 'A' already chosen, choose this as the second estate 'B' and compare the two estates
					compareEstates(leftEstateId, estate.id);
					highlightSecondEstate(rightEstateId, estate.id);
					rightEstateId = estate.id;
				}
			}
		};
		estateElm.addEventListener("click", () => {
			handleClick();
		});
	});
};

export default loadEstates;

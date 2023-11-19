// highlight the first estate ('A') in the list
export const highlightFirstEstate = (id) => {
	// find the clicked element
	const estateElm = document.querySelector(".estate" + id);
	const highlightAElm = document.createElement("div");
	// add the highlight
	highlightAElm.innerHTML =
		'<div class="estate_chosenA"><div class="estate_chosenA_letter">A</div></div>';
	estateElm.appendChild(highlightAElm);
};

// cancel the highlight on the first estate after another is clicked
export const unchooseFirstEstate = (id) => {
	const chosenFirstEstateElm = document.querySelector(".estate" + id);
	const firstHighlight = chosenFirstEstateElm.querySelector(".estate_chosenA");
	firstHighlight.remove();
};

// highlight the second estate ('B') in the list
export const highlightSecondEstate = (oldId, id) => {
	const highlight = (id) => {
		const estateElm = document.querySelector(".estate" + id);
		const highlightBElm = document.createElement("div");
		// add the highlight
		highlightBElm.innerHTML =
			'<div class="estate_chosenB"><div class="estate_chosenB_letter">B</div></div>';
		estateElm.appendChild(highlightBElm);
	};

	if (oldId) {
		// cancel the highlight on the first estate after another is clicked
		const previousEstateElm = document.querySelector(".estate" + oldId);
		const oldHighlight = previousEstateElm.querySelector(".estate_chosenB");
		oldHighlight.remove();
		highlight(id);
	} else {
		// otherwise just highlight
		highlight(id);
	}
};

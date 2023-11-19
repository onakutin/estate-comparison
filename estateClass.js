export class Estate {
	constructor(estate) {
		this.id = estate.id;
		this.image = estate.images[0];
		this.name = estate.name;
		this.price = estate.prize_czk;
		this.locality = estate.locality;
		this.building_area = estate.building_area;
		this.land_area = estate.land_area;
		this.company_logo = estate.company_logo;
		this.company_name = estate.company_name;
	}
}

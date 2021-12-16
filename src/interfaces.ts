export interface imageObject {
	sm: string;
	md: string;
	lg: string;
}

export interface itemMediaObject {
	type: string;
	src: imageObject;
}

export interface itemObject {
	id: number;
	name: string;
	excerpt: string;
	inStock: boolean;
	description: string;
	descriptionHTML: string;
	price: number;
	priceFormatted: string;
	priceRange: number[];
	priceRangeFormatted: string;
	image: imageObject;
	media: itemMediaObject[];
	variants: [];
	categories: [];
}

export interface linksObject {
	first: string;
	last: string;
	prev: string;
	next: string;
}

export interface metaObject {
	current_page: number;
	from: number;
	last_page: number;
	links: object[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}

export interface storefrontObj {
	data: itemObject[];
	links: linksObject;
	meta: metaObject;
}

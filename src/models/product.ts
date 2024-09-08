interface Posts {
	post_id: number
	name: string
	status: number
	created_at: string
	updated_at: string
	city: string
	city_ru: string
}

interface Offers {
	offer_id: number
	product_id: number
	quantity: number
	price: string
	opt: string
	my_opt: string
	status: number
	viewed: number
	created_at: string
	updated_at: string
	post_id: number
	block: number
	updated: string
	country: string
	country_ru: string
	year: number
	posts: Posts
}

interface OfferGroup {
	id: number
	model: number
	width: string
	height: string
	diameter: string
	reinforce: boolean
	run_flat: boolean
	load_index: string
	load_index_ru: string
	speed_index: string
	speed_index_ru: string
	homologation: boolean
	studded: boolean
	vehicle_type: string
	off_road: boolean
	active: boolean
	ply_rating: boolean
	ZR: boolean
	demo: boolean
	seal: boolean
	silent: boolean
}

interface Model {
	id: number
	name: string
	brand: number
	alias: string
	season: string
	images: []
}

interface ModelDescription {
	name: string
	meta_title: null
	meta_h1: null
	meta_description: null
}

export interface Product {
	disabled: boolean
	size_format: number
	photo: {
		url_part: string
		url_part2: string
	}
	photos: {
		urls: []
	}
	min_price: number
	max_price: number
	trc_id: number
	brand: {
		id: number
		name: string
	}
	offers: Offers[]
	full_name: string
	id: number
	offer_group: OfferGroup
	model: Model
	model_description: {
		ua: ModelDescription
		ru: ModelDescription
	}
	page_url: string
	labels: []
}

export interface ProductProps {
	data: Product
	result: boolean
}

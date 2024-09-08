interface Auto {
	label: string
	value: number
}

interface Brand {
	label: string
	sort_order: string
	value: number
}

interface Country {
	label: string
	value: string
}

interface Item {
	numeric: number
	p?: string
	value: string
}

interface Season {
	name: string
	name_key: string
	name_ua: string
	value: number
}

interface Year {
	label: number
	value: number
}

export interface Options {
	label: number | string
	value: number | string
}

export interface BaseDataProps {
	auto: Auto[]
	brand: Brand[]
	country: Country[]
	country_ru: Country[]
	dia: Item[]
	disc_diameter: Item[]
	disc_width: Item[]
	et: Item[]
	krip: Item[]
	tyre_diameter: Item[]
	tyre_height: Item[]
	tyre_season: Season[]
	tyre_width: Item[]
	tyre_year: Year[]
}

export interface CarModelProps {
	label: string
	value: number
}

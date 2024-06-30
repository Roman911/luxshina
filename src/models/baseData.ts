interface ItemsProps {
	value: number
	vt: number[]
	p: number
}

export interface BaseDataProps {
	tyre_width: ItemsProps[]
	tyre_height: ItemsProps[]
	tyre_diameter: ItemsProps[]
	tyre_season: {
		id: number
		name: string
		name_ua: string
		alias: string[]
	}[]
	manufacture_country: {
		id: number
		vt: number[]
		p: number
		name: string
		name_ua: string
		iso_a2: string
	}[]
}

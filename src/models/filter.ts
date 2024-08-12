export enum Section {
	Tires = 'tires',
	Disks = 'disks',
	Car = 'car',
	Battery = 'battery',
}

export enum Subsection {
	ByParams = 'byParams',
	ByCars = 'byCars',
}

export interface IFilter {
	width?: null | string
	height?: null | string
	diameter?: null | string
	brand?: null | string
	season?: null | string
	bolt_count?: null | string
	pcd?: null | string
	vehicle_type?: string[]
	price_from?: null | string
	price_to?: null | string
	city?: string[]
	model?: string[]
	country?: string[]
	speed_index?: string[]
	load_index?: string[]
	year?: string[]
	ply_rating?: string[]
	dia_from?: null | string
	dia_to?: null | string
	color?: string[]
	et_from?: null | string
	et_to?: null | string
	bolt_count_pcd?: string[]
	only_xl?: boolean
	only_owl?: boolean
	only_retread?: boolean
	only_provider_with_tax?: boolean
	homologation?: string[]
	vehicle_type_alt?: string[]
	only_run_flat?: boolean
	only_flange_protector?: boolean
	only_studded?: boolean
	only_off_road?: boolean
	only_c?: boolean
	only_not_c?: boolean
	only_reinforced?: boolean
}

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	section: 'tyre' | 'disk' | 'car'
	subsection: 'byParams' | 'byCars'
	filter: {
		width: null | string
		height: null | string
		diameter: null | string
		brand: null | string
		season: null | string
		bolt_count: null | string
		pcd: null | string
		vehicle_type: string[]
		price_from: null | string
		price_to: null | string
		city: string[]
		model: string[]
		country: string[]
		speed_index: string[]
		load_index: string[]
		year: string[]
		ply_rating: string[]
		dia_from: null | string
		dia_to: null | string
		color: string[]
		et_from: null | string
		et_to: null | string
		bolt_count_pcd: string[]
		only_xl: boolean
		only_owl: boolean
		only_retread: boolean
		only_provider_with_tax: boolean
		homologation: string[]
		vehicle_type_alt: string[]
		only_run_flat: boolean
		only_flange_protector: boolean
		only_studded: boolean
		only_off_road: boolean
		only_c: boolean
		only_not_c: boolean
		only_reinforced: boolean
	}
}

const initialState: FilterState = {
	section: 'tyre',
	subsection: 'byParams',
	filter: {
		width: null,
		height: null,
		diameter: null,
		brand: null,
		season: null,
		bolt_count: null,
		pcd: null,
		vehicle_type: [],
		price_from: null,
		price_to: null,
		city: [],
		model: [],
		country: [],
		speed_index: [],
		load_index: [],
		year: [],
		ply_rating: [],
		dia_from: null,
		dia_to: null,
		color: [],
		et_from: null,
		et_to: null,
		bolt_count_pcd: [],
		only_xl: false,
		only_owl: false,
		only_retread: false,
		only_provider_with_tax: false,
		homologation: [],
		vehicle_type_alt: [],
		only_run_flat: false,
		only_flange_protector: false,
		only_studded: false,
		only_off_road: false,
		only_c: false,
		only_not_c: false,
		only_reinforced: false,
	}
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeSubsection: (state, actions: PayloadAction<'byParams' | 'byCars'>) => {
			state.subsection = actions.payload;
		},
		changeSection: (state, actions: PayloadAction<'tyre' | 'disk' | 'car'>) => {
			state.section = actions.payload;
		},
	},
})

export const { changeSubsection, changeSection } = filterSlice.actions

export default filterSlice.reducer

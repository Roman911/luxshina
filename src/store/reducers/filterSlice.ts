import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IFilter, Section, Subsection } from '../../models/filter';

export interface FilterState {
	section: Section
	subsection: Subsection
	filter: IFilter
}

const initialState: FilterState = {
	section: Section.Tires,
	subsection: Subsection.ByParams,
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
		changeSubsection: (state, actions: PayloadAction<Subsection>) => {
			state.subsection = actions.payload;
		},
		changeSection: (state, actions: PayloadAction<Section>) => {
			state.section = actions.payload;
		},
		setParams: (state, actions: PayloadAction<IFilter>) => {
			state.filter = {...state.filter, ...actions.payload}
		},
		removeParam: (state, actions: PayloadAction<IFilter>) => {
			console.log({...state.filter, ...actions.payload})
			state.filter = {...state.filter, ...actions.payload}
		},
	},
})

export const { changeSubsection, changeSection, setParams, removeParam } = filterSlice.actions

export default filterSlice.reducer

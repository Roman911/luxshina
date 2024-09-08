import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Section } from '../../models/filter';

interface Filter {
	brand: number
	model: number
	year: number
	modification: number
}

export interface FilterCarState {
	section: Section
	filter: Filter
}

const initialState: FilterCarState = {
	section: Section.Tires,
	filter: {
		brand: 0,
		model: 0,
		year: 0,
		modification: 0,
	}
}

export const filterCarSlice = createSlice({
	name: 'filterCar',
	initialState,
	reducers: {
		setCarFilter: (state, actions: PayloadAction<Filter>) => {
			state.filter = {...state.filter, ...actions.payload}
		},
	},
})

export const { setCarFilter } = filterCarSlice.actions

export default filterCarSlice.reducer

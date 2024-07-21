import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	subsection: 'byParams' | 'byCars'
}

const initialState: FilterState = {
	subsection: 'byParams'
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeSubsection: (state, actions: PayloadAction<'byParams' | 'byCars'>) => {
			state.subsection = actions.payload;
		},
	},
})

export const { changeSubsection } = filterSlice.actions

export default filterSlice.reducer

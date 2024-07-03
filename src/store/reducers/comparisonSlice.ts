import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ComparisonState {
	comparisonItems: number[]
}

const initialState: ComparisonState = {
	comparisonItems: [],
}

export const comparisonSlice = createSlice({
	name: 'comparison',
	initialState,
	reducers: {
		addComparison: (state, actions: PayloadAction<number>) => {
			state.comparisonItems.push(actions.payload);
		},
		removeComparison: (state, actions: PayloadAction<number>) => {
			state.comparisonItems = state.comparisonItems.filter(item => item !== actions.payload);
		},
	},
})

export const { addComparison, removeComparison } = comparisonSlice.actions

export default comparisonSlice.reducer

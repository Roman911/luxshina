import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DefenseState {
	items: number[]
}

const initialState: DefenseState = {
	items: [],
}

export const defenseSlice = createSlice({
	name: 'defense',
	initialState,
	reducers: {
		addDefense: (state, actions: PayloadAction<number>) => {
			state.items.push(actions.payload);
		},
	},
})

export const { addDefense } = defenseSlice.actions

export default defenseSlice.reducer

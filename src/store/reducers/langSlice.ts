import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LangState {
	lang: string
}

const initialState: LangState = {
	lang: 'ua',
}

export const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		changedLang: (state, actions: PayloadAction<string>) => {
			state.lang = actions.payload
		},
	},
})

export const { changedLang } = langSlice.actions

export default langSlice.reducer
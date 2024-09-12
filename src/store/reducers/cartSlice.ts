import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
	cartItems: number[]
}
const initialState: CartState = {
	cartItems: [],
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addCart: (state, actions: PayloadAction<number>) => {
			state.cartItems.push(actions.payload);
		},
		removeCart: (state, actions: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter(item => item !== actions.payload);
		},
	}
});

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer

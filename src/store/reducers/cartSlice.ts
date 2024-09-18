import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CreateItem {
	id: number
	quantity: number
}

export interface CartState {
	cartItems: CreateItem[]
}

const initialState: CartState = {
	cartItems: [],
}

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addCart: (state, actions: PayloadAction<CreateItem>) => {
			state.cartItems.push(actions.payload);
		},
		addStorageCart: (state, actions: PayloadAction<CreateItem>) => {
			const index = state.cartItems.findIndex(item => item.id === actions.payload.id);
			if(index === -1) state.cartItems.push(actions.payload);
		},
		removeCart: (state, actions: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter(item => item.id !== actions.payload);
		},
		setQuantity: (state, actions: PayloadAction<CreateItem>) => {
			state.cartItems = [
				...state.cartItems.filter(item => item.id !== actions.payload.id),
				{ id: actions.payload.id, quantity: actions.payload.quantity }
			];
		}
	},
});

export const { addCart, addStorageCart, removeCart, setQuantity } = cartSlice.actions

export default cartSlice.reducer

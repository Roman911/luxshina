import { combineReducers, configureStore } from '@reduxjs/toolkit';
import langReducer from './reducers/langSlice.ts';
import { tyreBrandsAPI } from "../services/tyreBrandsService.ts";

const rootReducer = combineReducers({
	langReducer,
	[tyreBrandsAPI.reducerPath]: tyreBrandsAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(tyreBrandsAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

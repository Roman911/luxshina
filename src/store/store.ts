import { combineReducers, configureStore } from '@reduxjs/toolkit';
import langReducer from './reducers/langSlice.ts';
import { baseDataAPI } from '../services/baseDataService.ts';

const rootReducer = combineReducers({
	langReducer,
	[baseDataAPI.reducerPath]: baseDataAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(baseDataAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

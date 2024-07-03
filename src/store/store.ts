import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookmarksReducer from './reducers/bookmarksSlice';
import comparisonReducer from './reducers/comparisonSlice';
import langReducer from './reducers/langSlice';

import { baseDataAPI } from '../services/baseDataService';

const rootReducer = combineReducers({
	bookmarksReducer,
	comparisonReducer,
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

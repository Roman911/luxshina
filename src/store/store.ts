import { combineReducers, configureStore } from '@reduxjs/toolkit';

import defenseReducer from './reducers/defenseSlice';
import langReducer from './reducers/langSlice';

import { baseDataAPI } from '../services/baseDataService';

const rootReducer = combineReducers({
	defenseReducer,
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

import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './reducers/calculator';

export const store = configureStore({
	reducer: {
		result: calculatorReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

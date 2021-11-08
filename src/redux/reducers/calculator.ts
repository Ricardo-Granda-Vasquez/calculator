import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState } from '../../components/calculator/CalculatorInterfaces';

const initialState: CalculatorState = { result: '' }

export const calculatorSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setResult: (state: CalculatorState, action: PayloadAction<string>) => {
			state.result = action.payload;
		},
		setHistoricalResult: (state: CalculatorState, action: PayloadAction) => {
		}
	}
});

export const { setResult, setHistoricalResult } = calculatorSlice.actions;

export default calculatorSlice.reducer
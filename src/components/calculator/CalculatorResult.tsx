import React from 'react';
import { CalculatorResultProps } from "./CalculatorInterfaces";


const CalculatorResult = (props: CalculatorResultProps) => (
	<div className='calculator-result'>
		<input className='calculator-result-display' value={props.result} readOnly />
	</div>
);

export default CalculatorResult;
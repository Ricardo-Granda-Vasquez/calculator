import React, { useState } from 'react';
import { CalculatorProps } from './CalculatorInterfaces';
import KeyBoardNumbers from '../Keyboard/KeyBoardNumbers';
import KeyBoardOperators from '../Keyboard/KeyBoarOperators';
import CalculatorResult from './CalculatorResult';
import CalculatorLogic from './CalculatorLogic';
import './styles.scss';

const Calculator = (props: CalculatorProps) => {
	const [result, setResult] = useState<string>('');
	const onClick = (keyBoardName: string, keyBoardValue: string) => {
		const resultUpdated = CalculatorLogic(keyBoardName, keyBoardValue, result);
		setResult(resultUpdated);
	}
	return (
		<div>
			<div className='calculator'>
				<h3>{props.title}</h3>
				<CalculatorResult result={result} />
				<div className='calculator-buttons'>
					<KeyBoardOperators onClick={onClick} />
					<KeyBoardNumbers onClick={onClick} />
				</div>
			</div>
		</div>
	);
};

export default Calculator;
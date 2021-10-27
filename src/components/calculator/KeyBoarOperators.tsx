import React from 'react';
import KeyBoardProps from './CalculatorInterfaces';


const KeyBoardOperators = (props: KeyBoardProps) => {
	const operators: Array<{ name: string, val: string, classes: string }> = [
		{
			name: "erase",
			val: "CE",
			classes: 'calc-button is-erase is-clear',
		},
		{
			name: "equal",
			val: "=",
			classes: 'calc-button is-equals',
		},
		{
			name: "rotate",
			val: "<=",
			classes: 'calc-button',
		},
		{
			name: "reset",
			val: "C",
			classes: 'calc-button is-clear',
		},
		{
			name: ".",
			val: ".",
			classes: 'calc-button',
		},
		{
			name: "divide",
			val: "/",
			classes: 'calc-button',
		},
		{
			name: "sum",
			val: "+",
			classes: 'calc-button',
		},
		{
			name: "minus",
			val: "-",
			classes: 'calc-button',
		},
		{
			name: "multiply",
			val: "*",
			classes: 'calc-button',
		},
	]

	return (
		<>
			{operators.map((val) => (
				<span
					key={`key_${val.val}`}

					className={val.classes}
				>
					<button
						onClick={() => props.onClick(val.name, val.val)}
					>
						{val.val}
					</button>
				</span>
			))
			}
		</>
	)
}

export default KeyBoardOperators;
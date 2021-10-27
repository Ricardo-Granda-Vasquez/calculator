import React, { useState } from 'react';
import KeyBoardProps from './CalculatorInterfaces';

const KeyBoardNumbers = (props: KeyBoardProps) => {
	const numbers: Array<{ name: string | number, val: number, classes: string }> = [
		{
			name: 1,
			val: 1,
			classes: 'calc-button',
		},
		{
			name: 2,
			val: 2,
			classes: 'calc-button',
		},
		{
			name: 3,
			val: 3,
			classes: 'calc-button',
		},
		{
			name: 4,
			val: 4,
			classes: 'calc-button',
		},
		{
			name: 5,
			val: 5,
			classes: 'calc-button',
		},
		{
			name: 6,
			val: 6,
			classes: 'calc-button',
		},
		{
			name: 7,
			val: 7,
			classes: 'calc-button',
		},
		{
			name: 8,
			val: 8,
			classes: 'calc-button',
		},
		{
			name: 9,
			val: 9,
			classes: 'calc-button',
		},
		{
			name: 0,
			val: 0,
			classes: 'calc-button is-zero',
		},
	];
	return (
		<>
			{numbers.map((val) => (
				<span
					key={`key_${val.val}`}
					className={val.classes}
				>
					<button
						onClick={() => props.onClick(val.name.toString(), val.val.toString())}
					>
						{val.val}
					</button>
				</span>
			))
			}
		</>
	)
};

export default KeyBoardNumbers;
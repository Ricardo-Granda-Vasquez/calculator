import React, { useState } from 'react';
import { numbers } from './KeyboardConstants';
import KeyBoardProps from './KeyboardInterface';

const KeyBoardNumbers = (props: KeyBoardProps) => {
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
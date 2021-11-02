import React from 'react';
import { operators } from './KeyboardConstants';
import KeyBoardProps from './KeyboardInterface';

const KeyBoardOperators = (props: KeyBoardProps) => (
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
);

export default KeyBoardOperators;
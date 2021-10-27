

export default interface KeyBoardProps {
	onClick: (e: string, val: string) => void;
}

// export interface KeyBoardOperatorsProps {
// 	onClickOperand: (e: string, val: string) => void;
// }

export interface CalculatorProps {
	title: string;
}

export interface CalculatorClassProps {
	keyWordName: string;
	keyWordValue: string;
}

export interface CalculatorResultProps {
	result?: string;
}

export type ActionsTypes = 'reset' | 'erase' | 'equal' | 'rotate';

export type Operands = 'sum' | 'divide' | 'minus' | 'multiply';


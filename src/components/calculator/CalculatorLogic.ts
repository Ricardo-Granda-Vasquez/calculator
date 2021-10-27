import { ActionsTypes } from "./CalculatorInterfaces";

export const DEFAULT_STRING_FOR_ERROR = 'error'

const calculate = (result: string): string => {
	try {
		return (new Function('return ' + result)() || "") + "";
	} catch (e) {
		return DEFAULT_STRING_FOR_ERROR;
	}
}

const rotate = (result: string): string => {
	const finalResult = result.split('');
	finalResult.push(finalResult.shift() as string);
	return finalResult.join('')
}

export const CalculatorLogic = (
	keyWordName: string,
	keyWordValue: string,
	result: string,
) => {
	const actions = {
		reset: () => '',
		erase: (result: string) => (result && result.slice(0, -1) || ''),
		equal: (result: string) => calculate(result),
		rotate: (result: string) => rotate(result),
	};

	const actionSelected = actions[keyWordName as ActionsTypes];
	if (!actionSelected)
		return `${result}${keyWordValue}`;
	return actionSelected(result);
};

export default CalculatorLogic;
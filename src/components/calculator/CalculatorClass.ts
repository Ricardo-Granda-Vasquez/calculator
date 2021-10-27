import { ActionsTypes, CalculatorClassProps, Operands } from "./CalculatorInterfaces";
import { DEFAULT_STRING_FOR_ERROR } from "./CalculatorLogic";

export class CalculatorLogicClass {

	private previousOperand: string;

	private previousOperandText: string;

	private currentOperand: string;

	private keyWordName: string;

	private operation: string | undefined;

	private result: string;

	private operationValue: string | undefined;

	constructor(props: CalculatorClassProps) {
		this.keyWordName = props.keyWordName;
		this.previousOperand = props.keyWordValue;
		this.previousOperandText = '';
		this.currentOperand = '';
		this.operation = '';
		this.operationValue = '';
		this.result = '';
	}

	setResult(resultState: string) {
		this.result = resultState;
	}

	sum() {
		this.setResult((Number(this.previousOperand) + Number(this.currentOperand)).toString());
	}

	divide() {
		let result;
		try {
			result = (Number(this.previousOperand) / Number(this.currentOperand));
			result = result.toString();
		} catch (e) {
			result = DEFAULT_STRING_FOR_ERROR;
		}
		this.setResult(result);
	}

	multiply() {
		this.setResult((Number(this.previousOperand) * Number(this.currentOperand)).toString());
	}

	minus() {
		this.setResult((Number(this.previousOperand) - Number(this.currentOperand)).toString());
	}
	calculate() {
		const actions: { [key in ActionsTypes | Operands]: Function
		} = {
			reset: () => this.reset(),
			erase: () => this.delete(),
			equal: () => this.calculate(),
			rotate: () => this.rotate(),
			sum: () => this.sum(),
			divide: () => this.divide(),
			multiply: () => this.multiply(),
			minus: () => this.minus(),
		};
		console.log(this);
		actions[this.operation as ActionsTypes]();
	}

	getDisplayNumber(number: number) {
		const stringNumber = number.toString()
		const integerDigits = parseFloat(stringNumber.split('.')[0])
		const decimalDigits = stringNumber.split('.')[1]
		let integerDisplay
		if (isNaN(integerDigits)) {
			integerDisplay = ''
		} else {
			integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`
		} else {
			return integerDisplay
		}
	};

	updateDisplay() {
		this.currentOperand =
			this.getDisplayNumber(Number(this.currentOperand));
		if (this.operation != null) {
			this.previousOperandText =
				`${this.getDisplayNumber(Number(this.previousOperand))} ${this.operation}`
		} else {
			this.previousOperandText = ''
		}
	}

	rotate() {
		console.log(this);
		const finalResult = this.currentOperand ? this.currentOperand.split('') : [];
		finalResult.push(finalResult.shift() as string);
		this.setResult(finalResult.join(''));
	}

	chooseOperation(operation: string, value: string) {
		if (this.currentOperand == '') return;
		if (this.previousOperand !== '') {

			console.log("here");
			this.calculate();
		}
		this.operation = operation;
		this.operationValue = value;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	reset() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
		this.setResult('');
	}

	delete() {
		this.currentOperand = this.currentOperand?.toString().slice(0, -1);
	}
	addNumber(number: number) {
		if (number.toString() === '.' && this.currentOperand?.includes('.')) return
		this.currentOperand = this.currentOperand && this.currentOperand.toString() + number.toString() || number.toString();
	}

	getResult() {
		return this.result;
	}

	getThisPreviousOperandText() {
		return this.previousOperandText;
	}
}
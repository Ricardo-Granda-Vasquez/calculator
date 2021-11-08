import { CalculatorProps, CalculatorState } from './CalculatorInterfaces';
import KeyBoardNumbers from '../Keyboard/KeyBoardNumbers';
import KeyBoardOperators from '../Keyboard/KeyBoarOperators';
import CalculatorResult from './CalculatorResult';
import CalculatorLogic from './CalculatorLogic';
import './styles.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setResult } from '../../redux/reducers/calculator';

const Calculator = (props: CalculatorProps) => {
	const { result } = useAppSelector((state: { result: CalculatorState }) => state.result);
	const resultDispatch = useAppDispatch();
	const onClick = (keyBoardName: string, keyBoardValue: string) => {
		const resultUpdated = CalculatorLogic(keyBoardName, keyBoardValue, result);
		resultDispatch(setResult(resultUpdated));
	}
	return (
		<div>
			<div className='calculator'>
				<h3>{props.title}</h3>
				<CalculatorResult result={result} />
				<div className='calculator-buttons'>
					<KeyBoardOperators onClick={onClick} />
					<KeyBoardNumbers onClick={onClick} />
					{/*TODO: Component for showing the historical operations*/}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
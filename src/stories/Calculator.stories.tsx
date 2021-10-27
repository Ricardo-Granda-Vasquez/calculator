import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Calculator from '../components/calculator/Calculator';


export default {
	title: 'calculator',
	component: Calculator,
} as ComponentMeta<typeof Calculator>;


const calculatorStory: ComponentStory<typeof Calculator> = () => (
	<Calculator title='Calculator Test' />
);

export const CalculatorInstance = calculatorStory.bind({});
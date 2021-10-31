export const operators: Array<{ name: string, val: string, classes: string }> = [
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
];

export const numbers: Array<{ name: string | number, val: number, classes: string }> = [
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
import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import Calculator from '../components/calculator/Calculator';
import ProviderWrapper from '../redux/providerWrapper';
import { store } from '../redux/store';


export default {
	title: 'calculator',
	component: Calculator,
} as ComponentMeta<typeof Calculator>;


const withProvider = (story: any) => (
	<ProviderWrapper store={store}>
		{story()}
	</ProviderWrapper>
)

storiesOf('Button', module)
	.addDecorator(withProvider)
	.add('default', () => (
		<Calculator title='test calculator' />
	));
import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from '@/UI/atoms/inputs/Input';

describe('test input component', () => {
	it('should render input with placeholder', () => {
		render(<Input text='Testing' />);

		const input = screen.getByPlaceholderText('Testing');

		expect(input).toBeInTheDocument();
	});

	it('should render the input with the correct type', () => {
		render(
			<Input
				type='password'
				text='Testing'
			/>
		);

		const input = screen.getByPlaceholderText('Testing');
		expect(input).toHaveAttribute('type', 'password');
	});

	it('should render the input with an icon', () => {
		const icon = <span data-testid='icon'>Icon</span>;
		render(<Input icon={icon} />);

		const iconElement = screen.getByTestId('icon');
		expect(iconElement).toBeInTheDocument();
	});

	it('should render the input with the correct class', () => {
		render(
			<Input
				className='test-class'
				text='Testing'
			/>
		);

		const input = screen.getByPlaceholderText('Testing');
		expect(input).toHaveClass('test-class');
	});
});

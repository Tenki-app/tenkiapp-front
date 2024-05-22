import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '@/UI/atoms/button/Button';

describe('test button component', () => {
	it('should show button text correctly', () => {
		render(<Button>Test</Button>);

		const button = screen.getByText('Test');
		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe('BUTTON');
	});

	it('should render button disabled', () => {
		render(<Button isDisabled>Test</Button>);

		expect(screen.getByText('Test')).toBeDisabled();
	});

	it('should render <a> tag', () => {
		render(<Button redirect='http//:www.tenki.com'>Test</Button>);

		const button = screen.getByText('Test');
		expect(button.tagName).toBe('A');
	});

	it('should renders a button of type submit', () => {
		render(<Button type='submit'>Test</Button>);

		const button = screen.getByText('Test');
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('calls the onClick handler when clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Test</Button>);

		const button = screen.getByText('Test');
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalled();
	});
});

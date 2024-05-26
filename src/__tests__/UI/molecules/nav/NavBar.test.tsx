import { render, fireEvent, screen } from '@testing-library/react';

import { NavBar } from '@/UI/molecules/nav/NavBar';
import { useRouter } from 'next/navigation';

/* jest.mock('next/navigation', () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		replace: replaceMock,
	}),
})); */

jest.mock('@/lib/store/store', () => ({
	useAppStore: jest.fn().mockReturnValue({
		navOption: 'Task',
		setNavOption: jest.fn(),
	}),
}));

jest.mock('react-i18next', () => ({
	useTranslation: jest.fn().mockReturnValue({
		t: jest.fn(),
		i18n: jest.fn(),
	}),
}));

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;

describe('NavBar tests', () => {
	it('should redirect to tasks in the first render', () => {
		const replaceMock = jest.fn();

		useRouterMock.mockReturnValue({
			replace: replaceMock,
		});

		render(<NavBar />);

		const homeButton = screen.getByTestId('navbar-task-button');

		fireEvent.click(homeButton);
		expect(replaceMock).toHaveBeenCalledWith('/tasks');
	});

	it('should all link have correct href', () => {
		render(<NavBar />);
		const homeLink = screen.getByTestId('navbar-home-button');
		const taskLink = screen.getByTestId('navbar-task-button');
		const profileLink = screen.getByTestId('navbar-profile-button');

		expect(homeLink).toHaveAttribute('href', '/');
		expect(taskLink).toHaveAttribute('href', '/tasks');
		expect(profileLink).toHaveAttribute('href', '/profile');
	});
});

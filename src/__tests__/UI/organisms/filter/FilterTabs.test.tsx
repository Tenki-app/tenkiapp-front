import { fireEvent, render, screen } from '@testing-library/react';

import { FilterTabs } from '@/UI/organisms/filter/FilterTabs';

describe('test filter tabs component', () => {
	const tabsContent = ['today', 'next', 'someday'];
	const filterTestId = 'filter-tabs';
	const setActiveTag = jest.fn();

	it('should show all tabs element correctly', () => {
		render(
			<FilterTabs
				activeTag='today'
				setActiveTag={setActiveTag}
				tabsContent={tabsContent}
				testId={filterTestId}
			/>
		);

		const filterTabs = screen.getByTestId('filter-tabs');

		expect(filterTabs).toBeInTheDocument();
		tabsContent.forEach((tab) => {
			expect(screen.getByText(tab)).toBeInTheDocument();
		});
	});

	it('should calls the setActiveTag setter when a tab is clicked', () => {
		render(
			<FilterTabs
				activeTag='today'
				setActiveTag={setActiveTag}
				tabsContent={tabsContent}
			/>
		);

		const button = screen.getByText('someday');
		fireEvent.click(button);

		expect(setActiveTag).toHaveBeenCalledWith('someday');
	});
});

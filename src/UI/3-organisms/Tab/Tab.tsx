import { Button } from '@/UI/1-atoms/Button/Button';

import type { Dispatch, SetStateAction } from 'react';
import type { TypeTabContent } from '@/lib/types/type';

type TypeTabProps = {
	tabContent: Array<TypeTabContent>;
	activeTab?: String;
	setActiveTab?: Dispatch<SetStateAction<string>>;
	containerStyles?: string;
};

const Tab = ({
	tabContent,
	activeTab,
	setActiveTab,
	containerStyles,
}: TypeTabProps) => {
	return (
		<div className={`${containerStyles ?? ''}`}>
			<ul className=''>
				{tabContent.map((singleTab, index) => (
					<li key={index}>
						<Button variant='custom'>{singleTab.header}</Button>
					</li>
				))}
			</ul>
			<div className=''>
				{tabContent.map((singleTab) => singleTab.body)}
			</div>
		</div>
	);
};

export { Tab };

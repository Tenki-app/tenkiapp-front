import { TabHeader } from '@/UI/2-molecules/Tab/TabHeader';
import { TabBody } from '@/UI/2-molecules/Tab/TabBody';
import { ReactNode } from 'react';

type TypeTabProps = {
	tabsContent: Array<{ header: ReactNode; body: ReactNode }>;
};

const Tab = ({ tabsContent }: TypeTabProps) => {
	return (
		<div>
			<ul className=''></ul>
		</div>
	);
};

export default Tab;

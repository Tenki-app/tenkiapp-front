import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { FilterTags } from '@/UI/3-organisms/Task/Filter/FilterTags';

import type { TypeTabContent } from '@/lib/types/type';

const TaskPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<section className='px-2'>
				<FilterTags containerStyles='' />
				<div className='bg-olive-drab w-full h-[500px]'></div>
			</section>
		</MainLayout>
	);
};

export default TaskPage;

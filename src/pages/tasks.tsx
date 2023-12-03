import { useTranslation } from 'react-i18next';

import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { Tab } from '@/UI/3-organisms/Tab/Tab';

import type { TypeTabContent } from '@/lib/types/type';

const TaskPage = () => {
	const { t } = useTranslation();

	return <MainLayout>{/* <FilterTags containerStyles='' /> */}</MainLayout>;
};

export default TaskPage;

import { useEffect, useMemo, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

import { useAppStore } from '@/lib/store/store';
import { tasksDummyData } from '@/lib/data/tasks';
import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { MainLayout } from '@/UI/layouts/MainLayout';
import { FilterTags } from '@/UI/organisms/filter/FilterTabs';
import { ProgressBar } from '@/UI/molecules/bar/ProgressBar';
import { Loader } from '@/UI/molecules/loader/Loader';
import { PanelTasks } from '@/UI/organisms/task/Tabs/PanelTasks';
import { Title } from '@/UI/atoms/text/Title';
import { Button } from '@/UI/atoms/button/Button';

import AddIcon from '@/assets/svg/task/addIcon.svg';

const TaskPage = () => {
	const { activeTaskTabFilter, setActiveTaskTabFilter } = useAppStore();
	const { t } = useTranslation();

	const [tasksToShow, setTasksToShow] = useState<any[]>([]);

	const tasksTagContent = ['today', 'next', 'someday'];

	const tasksDone = useMemo(() => {
		return tasksDummyData.filter((task) => task.state === 'done');
		// Pending to fix when backend is ready
		// eslint-disable-next-line
	}, [tasksDummyData]);

	const tasksDonePercent = (tasksDone.length / tasksDummyData.length) * 100;

	useEffect(() => {
		const tasksFiltered = tasksDummyData.filter(
			(singleTask) => singleTask.category === activeTaskTabFilter
		);
		setTasksToShow(tasksFiltered);
	}, [activeTaskTabFilter]);

	return (
		<MainLayout hasNav>
			<Title className='text-center !font-bold mb-4'>{t('tasks')}</Title>
			<section className='px-2 pb-20 h-[85%] lg:max-w-[1050px] lg:mx-auto'>
				<FilterTags
					tabsContent={tasksTagContent}
					activeTag={activeTaskTabFilter}
					setActiveTag={setActiveTaskTabFilter}
					containerStyles='w-[90%] mx-auto'
				/>
				<div className='bg-olive-drab h-full w-full px-8 py-8 flex flex-col justify-between'>
					<PanelTasks allTasks={tasksToShow} />
					<div className='flex flex-col items-end'>
						<ProgressBar
							containerStyles='mt-6'
							progressPercent={tasksDonePercent}
						/>
						<Button
							variant='rounded'
							className='mt-3 mr-3'
						>
							<AddIcon className='text-white w-[20px] h-[20px]' />
						</Button>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default withAuthenticationRequired(TaskPage, {
	onRedirecting: () => <Loader />,
	onBeforeAuthentication: () =>
		new Promise(() => {
			redirectToLoginPage();
		}),
});

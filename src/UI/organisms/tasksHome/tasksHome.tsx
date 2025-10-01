import { Title } from '@/UI/atoms/text/Title';
import { TasksListContainer } from '@/UI/molecules/tasksListContainer/taskListContainer';
import LeavesPictogram1 from '@/svg/home/Top-Leaves.svg';
import LeavesPictogram2 from '@/svg/home/Top-Leaves2.svg';
import { useGetAllTasksByCategory } from '@/lib/hooks/queries/useQueryTask';
import { useAppStore } from '@/lib/store/store';
import { useTranslation } from 'react-i18next';
const TasksHome = () => {
	const { user } = useAppStore();
	const { allTasksByCategory } = useGetAllTasksByCategory('today', user?.id);
	const inProgressTasks = allTasksByCategory?.filter((task) => task.state === 'progress');
	const pendingTasks = allTasksByCategory?.filter((task) => task.state === 'pending');
	const { t } = useTranslation();
	return (
		<div className='md:pl-[5%] md:pr-[5%] relative pb-40'>
			<LeavesPictogram1 className='hidden md:block w-[269px] h-[266px] text-dark-blue opacity-[.2] absolute right-0 ' />
			<Title
				type='subtitle'
				className='!font-bold text-[48px] mt-[20px] mb-[20px] text-center'
			>
				{t('tasks')}
			</Title>
			<div className='flex justify-center  flex-wrap gap-[5%] mt-[50px]'>
				<div className='flex flex-col items-center z-10'>
					<Title
						type='subtitle'
						className='text-[42px] mt-[20px] mb-[70px]'
					>
						{t('inProgress')}
					</Title>
					<TasksListContainer tasks={inProgressTasks} />
				</div>
				<div className='flex flex-col items-center'>
					<Title
						type='subtitle'
						className='!font-bold text-[42px] mt-[20px] mb-[70px]'
					>
						{t('pending')}
					</Title>
					<TasksListContainer tasks={pendingTasks} />
					<LeavesPictogram2 className='hidden md:block w-[269px] h-[266px] text-dark-blue opacity-[.2] absolute z-0 left-0 bottom-0' />
				</div>
			</div>
		</div>
	);
};
export { TasksHome };

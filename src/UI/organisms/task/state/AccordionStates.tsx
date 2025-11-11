import { TitleAccordion } from '@/UI/molecules/accordion/TitleAccordion';
import { CardTask } from '../cards/CardTask';
import { Text } from '@/UI/atoms/text/Text';
import type { TypeTask } from '@/lib/types/tasks';
import { useTranslation } from 'react-i18next';

type TypeAccordionStatesProps = {
	inProgressTasks?: TypeTask[] | null;
	doneTasks?: TypeTask[] | null;
	pendingTasks?: TypeTask[] | null;
};

const AccordionStates = ({ inProgressTasks, doneTasks, pendingTasks }: TypeAccordionStatesProps) => {
	const { t } = useTranslation();
	const contentToRender = (tasksToRender?: TypeTask[] | null) => {
		if (Array.isArray(tasksToRender) && tasksToRender?.length > 0) {
			return (
				<div className='flex flex-col gap-y-4'>
					{tasksToRender?.map((singleTask, index) => (
						<CardTask
							key={index}
							taskData={singleTask}
						/>
					))}
				</div>
			);
		}
		return <Text className='text-champagne-white text-center'>No tasks to show</Text>;
	};

	return (
		<div className='h-[80%] overflow-y-scroll flex flex-col gap-y-4'>
			<TitleAccordion
				title={t('inProgress')}
				isOpenInitial={true}
				content={contentToRender(inProgressTasks)}
				numberOfTasks={inProgressTasks?.length}
			/>
			<TitleAccordion
				title={t('pending')}
				content={contentToRender(pendingTasks)}
				numberOfTasks={pendingTasks?.length}
			/>
			<TitleAccordion
				title={t('done')}
				content={contentToRender(doneTasks)}
				numberOfTasks={doneTasks?.length}
			/>
		</div>
	);
};

export { AccordionStates };

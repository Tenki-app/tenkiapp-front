import { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/lib/store/store';
import { tasksDummyData } from '@/lib/data/tasks';
import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { useGetAllTasks } from '@/lib/hooks/queries/useQueryTask';

import { MainLayout } from '@/UI/layouts/MainLayout';
import { FilterTags } from '@/UI/organisms/filter/FilterTabs';
import { ProgressBar } from '@/UI/molecules/bar/ProgressBar';
import { Loader } from '@/UI/molecules/loader/Loader';
import { Title } from '@/UI/atoms/text/Title';
import { Button } from '@/UI/atoms/button/Button';
import { ModalAddTask } from '@/UI/organisms/task/modal/ModalAddTask';
import { ModalEditTask } from '@/UI/organisms/task/modal/ModalEditTask';
import { CardTask } from '@/UI/organisms/task/cards/CardTask';

import AddIcon from '@/assets/svg/task/addIcon.svg';

import type { MouseEvent } from 'react';
import type {
    TypeTaskCategory,
    TypeTaskState,
    TypeTask,
} from '@/lib/types/tasks';

const TaskPage = () => {
    const { activeTaskTabFilter, setActiveTaskTabFilter, user } = useAppStore();
    const { t } = useTranslation();
    const { allTasks } = useGetAllTasks(user?.id);

    const [tasksToShow, setTasksToShow] = useState<any[]>([]);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<TypeTask | null>(null);

    const tasksTagContent = ['today', 'next', 'someday'];

    const tasksDone = useMemo(() => {
        return tasksDummyData.filter((task) => task.state === 'done');
        // Pending to fix when backend is ready
        // eslint-disable-next-line
    }, [tasksDummyData]);

    const tasksDonePercent = (tasksDone.length / tasksDummyData.length) * 100;

    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowAddTaskModal(true);
    };

    const handleEditTask = (singleTask: TypeTask) => {
        setTaskToEdit(singleTask);
    };

    useEffect(() => {
        const tasksFiltered = tasksDummyData.filter(
            (singleTask) => singleTask.category === activeTaskTabFilter
        );
        setTasksToShow(tasksFiltered);
    }, [activeTaskTabFilter]);

    return (
        <>
            <ModalAddTask
                showModal={showAddTaskModal}
                setShowModal={setShowAddTaskModal}
            />
            <ModalEditTask
                showModal={showEditTaskModal}
                setShowModal={setShowEditTaskModal}
                formInitialValues={null}
            />
            <MainLayout
                className='md:pt-[90px]'
                hasNav
            >
                <Title className='text-center !font-bold mb-4'>
                    {t('tasks')}
                </Title>
                <section className='px-2 pb-20 h-[85%] lg:max-w-[950px] lg:mx-auto'>
                    <FilterTags
                        tabsContent={tasksTagContent}
                        activeTag={activeTaskTabFilter}
                        setActiveTag={setActiveTaskTabFilter}
                        containerStyles='w-[90%] mx-auto'
                    />
                    <div className='bg-dark-gray rounded-lg h-full w-full px-4 lg:px-8 py-8 flex flex-col justify-between'>
                        <div className='flex flex-col h-[80%] px-1 gap-y-4 overflow-y-auto'>
                            {allTasks?.map((singleTask: any, index: number) => (
                                <CardTask
                                    key={index}
                                    title={singleTask.title}
                                    description={singleTask.description}
                                    time={singleTask.time}
                                    date={singleTask.date_task}
                                    state={singleTask.state as TypeTaskState}
                                    category={
                                        singleTask.category as TypeTaskCategory
                                    }
                                    onClickEdit={() => {
                                        handleEditTask(singleTask);
                                    }}
                                />
                            ))}
                        </div>
                        <div className='flex flex-col items-end'>
                            <ProgressBar
                                containerStyles='mt-6'
                                progressPercent={tasksDonePercent}
                            />
                            <Button
                                variant='rounded'
                                className='mt-3 mr-3'
                                onClick={handleAddTask}
                            >
                                <AddIcon className='text-white w-[20px] h-[20px]' />
                            </Button>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
};

export default withAuthenticationRequired(TaskPage, {
    onRedirecting: () => <Loader />,
    onBeforeAuthentication: () =>
        new Promise(() => {
            redirectToLoginPage();
        }),
});

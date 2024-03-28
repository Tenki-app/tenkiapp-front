import { useEffect, useMemo, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';
import { useAppStore } from '@/lib/store/store';
import {
    useGetAllTasks,
    useGetAllTasksByCategory,
    usePostSingleTask,
    usePutSingleTask,
} from '@/lib/hooks/queries/useQueryTask';
import { taskFilterTagsCategories } from '@/lib/data/tasks';

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
    TypeAddTaskForm,
} from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

const TaskPage = () => {
    const { activeTaskTabFilter, setActiveTaskTabFilter, user } = useAppStore();
    const { t } = useTranslation();

    const { allTasksByCategory: todayAllTasks } = useGetAllTasksByCategory(
        'today',
        user?.id
    );
    const { allTasksByCategory: nextAllTasks } = useGetAllTasksByCategory(
        'next',
        user?.id
    );
    const { allTasksByCategory: somedayAllTasks } = useGetAllTasksByCategory(
        'someday',
        user?.id
    );

    const { postSingleTask, isLoadingPostTask } = usePostSingleTask();
    const { putSingleTask, isLoadingPutTask } = usePutSingleTask();

    const [tasksToShow, setTasksToShow] = useState<
        TypeTask[] | [] | undefined | null
    >(null);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<TypeTask | null>(null);

    const tasksDonePercent = () => {
        const tasksDone = todayAllTasks?.filter(
            (task) => task.state === 'done'
        );
        const isPossibleToCalculatePercent =
            tasksDone &&
            Array.isArray(tasksDone) &&
            todayAllTasks &&
            Array.isArray(todayAllTasks);

        if (isPossibleToCalculatePercent) {
            return (tasksDone.length / todayAllTasks.length) * 100;
        }

        return 0;
    };

    const handleOpenAddTaskModal = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowAddTaskModal(true);
    };

    const handleOpenEditTaskModal = (singleTask: TypeTask) => {
        setTaskToEdit(singleTask);
        setShowEditTaskModal(true);
    };

    const onSubmitEditTask: SubmitHandler<TypeAddTaskForm> = async (
        formData
    ) => {
        if (!taskToEdit) {
            return null;
        }

        const editTaskToSend = {
            ...formData,
            taskId: taskToEdit?.id,
        };

        putSingleTask(editTaskToSend).finally(() => {
            setShowEditTaskModal(false);
        });
    };

    const onSubmitAddTask: SubmitHandler<TypeAddTaskForm> = async (
        formData
    ) => {
        const newTaskToSend = {
            ...formData,
            state: 'pending',
        };

        postSingleTask(newTaskToSend).finally(() => {
            setShowAddTaskModal(false);
        });
    };

    useEffect(() => {
        if (activeTaskTabFilter === 'today') {
            setTasksToShow(todayAllTasks);
        }
        if (activeTaskTabFilter === 'next') {
            setTasksToShow(nextAllTasks);
        }
        if (activeTaskTabFilter === 'someday') {
            setTasksToShow(somedayAllTasks);
        }
    }, [
        activeTaskTabFilter,
        setTasksToShow,
        todayAllTasks,
        nextAllTasks,
        somedayAllTasks,
    ]);

    return (
        <>
            <ModalAddTask
                showModal={showAddTaskModal}
                setShowModal={setShowAddTaskModal}
                onSubmit={onSubmitAddTask}
                isLoadingSubmit={isLoadingPostTask}
            />
            <ModalEditTask
                showModal={showEditTaskModal}
                setShowModal={setShowEditTaskModal}
                formInitialValues={taskToEdit}
                onSubmit={onSubmitEditTask}
                isLoadingSubmit={isLoadingPutTask}
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
                        tabsContent={taskFilterTagsCategories}
                        activeTag={activeTaskTabFilter}
                        setActiveTag={setActiveTaskTabFilter}
                        containerStyles='w-[90%] mx-auto'
                    />
                    <div className='bg-dark-gray rounded-lg h-full w-full px-4 lg:px-8 py-8 flex flex-col justify-between'>
                        <div className='flex flex-col h-[80%] px-1 gap-y-4 overflow-y-auto'>
                            {tasksToShow?.map((singleTask, index) => (
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
                                    onClickEdit={(
                                        e: MouseEvent<HTMLButtonElement>
                                    ) => {
                                        e.stopPropagation();
                                        handleOpenEditTaskModal(singleTask);
                                    }}
                                />
                            ))}
                        </div>
                        <div className='flex flex-col items-end'>
                            <ProgressBar
                                containerStyles='mt-6'
                                progressPercent={tasksDonePercent()}
                            />
                            <Button
                                variant='rounded'
                                className='mt-3 mr-3'
                                onClick={handleOpenAddTaskModal}
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

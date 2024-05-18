import { useCallback, useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';
import { useAppStore } from '@/lib/store/store';
import {
    useGetAllTasksByCategory,
    usePostSingleTask,
} from '@/lib/hooks/queries/useQueryTask';
import { taskFilterTagsCategories } from '@/lib/data/tasks';

import { MainLayout } from '@/UI/layouts/MainLayout';
import { FilterTags } from '@/UI/organisms/filter/FilterTabs';
import { ProgressBar } from '@/UI/molecules/bar/ProgressBar';
import { Loader } from '@/UI/molecules/loader/Loader';
import { Title } from '@/UI/atoms/text/Title';
import { Button } from '@/UI/atoms/button/Button';
import { ModalAddTask } from '@/UI/organisms/task/modal/ModalAddTask';
import { AccordionStates } from '@/UI/organisms/task/state/AccordionStates';

import AddIcon from '@/assets/svg/task/addIcon.svg';

import type { MouseEvent } from 'react';
import type { TypeAddTaskForm } from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

const TaskPage = () => {
    const { activeTaskTabFilter, setActiveTaskTabFilter, user } = useAppStore();
    const { t } = useTranslation();

    const { allTasksByCategory } = useGetAllTasksByCategory(
        activeTaskTabFilter,
        user?.id
    );
    const { postSingleTask, isLoadingPostTask } = usePostSingleTask();

    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    const inProgressTasks = allTasksByCategory?.filter(
        (task) => task.state === 'progress'
    );
    const doneTasks = allTasksByCategory?.filter(
        (task) => task.state === 'done'
    );
    const pendingTasks = allTasksByCategory?.filter(
        (task) => task.state === 'pending'
    );

    const tasksDonePercent = useCallback(() => {
        if (activeTaskTabFilter === 'today') {
            const tasksDone = allTasksByCategory?.filter(
                (task) => task.state === 'done'
            );
            const isPossibleToCalculatePercent =
                tasksDone &&
                Array.isArray(tasksDone) &&
                allTasksByCategory &&
                Array.isArray(allTasksByCategory);

            if (isPossibleToCalculatePercent) {
                return (tasksDone.length / allTasksByCategory.length) * 100;
            }
        }

        return 0;
    }, [activeTaskTabFilter, allTasksByCategory]);

    const handleOpenAddTaskModal = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowAddTaskModal(true);
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

    return (
        <>
            <ModalAddTask
                showModal={showAddTaskModal}
                setShowModal={setShowAddTaskModal}
                onSubmit={onSubmitAddTask}
                isLoadingSubmit={isLoadingPostTask}
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
                        <AccordionStates
                            inProgressTasks={inProgressTasks}
                            doneTasks={doneTasks}
                            pendingTasks={pendingTasks}
                        />
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

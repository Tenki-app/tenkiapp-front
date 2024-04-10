import { AccordionElement } from '@/UI/molecules/accordion/AccordionElement';
import { CardTask } from './cards/CardTask';

import type {
    TypeTask,
    TypeTaskCategory,
    TypeTaskState,
} from '@/lib/types/tasks';

type TypeAllTasksCardRenderProps = {
    allTasksData?: TypeTask[] | [] | null;
    category: TypeTaskCategory;
};

const AllTasksCardRender = ({
    allTasksData,
    category,
}: TypeAllTasksCardRenderProps) => {
    const renderTodayTasks = (state: TypeTaskState) => {
        const todayDoneTasks = allTasksData?.filter(
            (singleTask) => singleTask.state === state
        );

        return (
            <div className='flex flex-col gap-y-4'>
                {todayDoneTasks?.map((singleTask, index) => (
                    <CardTask
                        key={index + singleTask.id}
                        taskData={singleTask}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className='flex flex-col h-[80%] px-1 gap-y-4 overflow-y-auto'>
            {category === 'today' ? (
                <AccordionElement
                    content={renderTodayTasks('progress')}
                    title='In Progress'
                />
            ) : (
                <>
                    {allTasksData?.map((singleTask, index) => (
                        <CardTask
                            key={index}
                            taskData={singleTask}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export { AllTasksCardRender };

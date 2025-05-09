import { TypeTask } from '@/lib/types/tasks';
import { CardTask } from '@/UI/organisms/task/cards/CardTask';

type tasksProps = {
    tasks?: TypeTask[];
};

const TasksListContainer = ({ tasks }: tasksProps) => {
    return (
        <div className='w-[311px] md:w-[511px] h-[372px] rounded-[17px] bg-dark-gray z-10 '>
            <div className='relative w-full h-[60px]  rounded-t-[17px] bg-dark-blue'>
                <div className='absolute top-[-19px] left-[50px] md:left-[100px] w-[21px] h-[46px] border-2 border-dark-blue rounded-[15px] bg-white '></div>
                <div className='absolute top-[-19px] right-[50px] md:right-[100px] w-[21px] h-[46px] border-2 border-dark-blue rounded-[15px] bg-white '></div>
            </div>
            <div className='flex flex-col gap-y-4 mt-3 px-3'>
                {tasks?.map((singleTask, index) => (
                    <CardTask
                        key={index}
                        taskData={singleTask}
                    />
                ))}
            </div>
        </div>
    );
};
export { TasksListContainer };

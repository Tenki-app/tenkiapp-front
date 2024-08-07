import { Title } from '@/UI/atoms/text/Title';
import { TasksListContainer } from '@/UI/molecules/tasksListContainer/taskListContainer';

const TasksHome = () => {
    return (
        <div className='md:pl-[5%] md:pr-[5%]'>
            <Title
                type='subtitle'
                className='!font-bold text-[48px] mt-[20px] mb-[20px] text-center'
            >
                Tareas
            </Title>
            <div className='flex justify-center  flex-wrap gap-[5%] mt-[50px]'>
                <div className='flex flex-col items-center'>
                    <Title
                        type='subtitle'
                        className='!font-bold text-[42px] mt-[20px] mb-[70px]'
                    >
                        En progreso
                    </Title>
                    <TasksListContainer />
                </div>
                <div className='flex flex-col items-center'>
                    <Title
                        type='subtitle'
                        className='!font-bold text-[42px] mt-[20px] mb-[70px]'
                    >
                        Pendientes
                    </Title>
                    <TasksListContainer />
                </div>
            </div>
        </div>
    );
};
export { TasksHome };

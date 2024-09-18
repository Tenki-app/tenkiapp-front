const TasksListContainer = () => {
    return (
        <div className='w-[311px] md:w-[511px] h-[372px] rounded-[17px] bg-dark-gray z-10'>
            <div className='relative w-full h-[60px]  rounded-t-[17px] bg-dark-blue'>
                <div className='absolute top-[-19px] left-[50px] md:left-[100px] w-[21px] h-[46px] border-2 border-dark-blue rounded-[15px] bg-white '></div>
                <div className='absolute top-[-19px] right-[50px] md:right-[100px] w-[21px] h-[46px] border-2 border-dark-blue rounded-[15px] bg-white '></div>
            </div>
        </div>
    );
};
export { TasksListContainer };

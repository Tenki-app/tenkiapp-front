import { FilterTags } from '@/UI/3-organisms/Task/Filter/FilterTags';

type TypeTaskPanelProps = {
	containerStyles?: string;
};

const TaskPanel = ({ containerStyles }: TypeTaskPanelProps) => {
	return (
		<div className={`w-full ${containerStyles ?? ''}`}>
			<FilterTags containerStyles='w-[90%] mx-auto' />
			<div className='bg-olive-drab w-full h-[500px]'></div>
		</div>
	);
};

export { TaskPanel };

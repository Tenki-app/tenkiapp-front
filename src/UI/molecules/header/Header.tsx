import { SwitchLang } from '../switchLang/SwitchLang';
import { Pill } from '../pill/Pill';

import CalendarIcon from '@/svg/task/calendarViewIcon.svg';
import TaskIcon from '@/svg/task/listViewIcon.svg';

type TypeHeaderProps = {
	typeHeader: 'tasksList' | 'tasksCalendar' | 'default';
};

const Header = ({ typeHeader }: TypeHeaderProps) => {
	return (
		<header className={`flex justify-between`}>
			<div className='flex gap-3'>
				<SwitchLang />
				{(typeHeader === 'tasksList' ||
					typeHeader === 'tasksCalendar') && (
					<Pill
						contentPill1={<CalendarIcon className='' />}
						contentPill2={<TaskIcon />}
					/>
				)}
			</div>
			{typeHeader === 'tasksCalendar' && <div>Calendar</div>}
		</header>
	);
};

export { Header };

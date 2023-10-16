import { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { Input } from '@/UI/1-atoms/Inputs/Input';
import { Title } from '@/UI/1-atoms/Text/Title';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/1-atoms/Inputs/Dropdown';
import { StateDropdown } from '@/UI/1-atoms/Inputs/stateDropDown';
import { useTranslation } from 'react-i18next';
import { Button } from '@/UI/1-atoms/Button/Button';
import { MainLayout } from '@/UI/4-layouts/MainLayout';
import { CardTask } from '@/UI/3-organisms/task/CardTask';
import { ButtonLogin } from '@/UI/1-atoms/Button/ButtonLogin';
import { ButtonLogout } from '@/UI/1-atoms/Button/ButtonLogout';

const options = [
	{
		label: 'label',
		value: 'value',
	},
	{
		label: 'label2',
		value: 'value2',
	},
];

const Home = () => {
	const [translations, i18n] = useTranslation('global');
	const { getIdTokenClaims } = useAuth0();

	const [hidden, setHidden] = useState(true);

	const showModal = () => {
		setHidden(!hidden);
	};

	const handleSignOut = () => {};

	return (
		<MainLayout hasNav={true}>
			<div className='bg-champagne-white w-screen h-screen p-12'>
				<div className='flex justify-end'>
					<Button onClick={handleSignOut}>Sign Out</Button>
				</div>
				<Title type='title'>Title</Title>
				<Title type='subtitle'>Subtitle</Title>
				<Dropdown dropdownOptions={options} />
				<button onClick={() => showModal()}>
					{translations('buttonLabel')}
				</button>
				<br />
				<button
					className='bg-dark-blue text-champagne-white p-2'
					onClick={() => i18n.changeLanguage('es')}
				>
					ESPAÑOL
				</button>
				<br />
				<br />
				<button
					className='bg-dark-blue text-champagne-white p-2'
					onClick={() => i18n.changeLanguage('en')}
				>
					ENGLISH
				</button>
				<div className='bg-olive-drab p-4 bg flex flex-col gap-4'>
					<ButtonLogin />
					<ButtonLogout />
					<CardTask
						title='Do dinner'
						description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
						time='15:00'
						date='13-01-2023'
						state='done'
						category='today'
					/>
					<CardTask
						title='To buy food'
						description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
						time='15:00'
						date='13-01-2023'
						state='progress'
						category='next'
					/>
					<CardTask
						title='Do dinner'
						description='sdl sdfklj sdfjll sdklfj sdlfjskdf sdlfjskdf sdlfjskdfsdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf sdlfjskdf'
						time='15:00'
						date='13-01-2023'
						state='pending'
						category='someday'
					/>
				</div>
				<StateDropdown
					className={hidden ? '!hidden' : '!block'}
					showModal={showModal}
				/>
				<Input
					className=''
					type='text'
					text={'Escribe tu usuario...'}
					icon={
						<ProfileIcon className='w-full h-full text-dark-blue-transparency' />
					}
				/>
			</div>
		</MainLayout>
	);
};

export default withAuthenticationRequired(Home, {
	onRedirecting: () => <>Loading...</>,
	returnTo: '/login',
});

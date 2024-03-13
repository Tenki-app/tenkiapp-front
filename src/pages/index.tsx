import { useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { redirectToLoginPage } from '@/lib/helpers/redirect/redirects';

import { Loader } from '@/UI/molecules/loader/Loader';
import { Input } from '@/UI/atoms/inputs/Input';
import { Title } from '@/UI/atoms/text/Title';
import ProfileIcon from '@/svg/navBar/profileIcon.svg';
import { Dropdown } from '@/UI/atoms/inputs/Dropdown';
import { StateDropdown } from '@/UI/atoms/inputs/stateDropDown';
import { useTranslation } from 'react-i18next';
import { Button } from '@/UI/atoms/button/Button';
import { MainLayout } from '@/UI/layouts/MainLayout';
import { CardTask } from '@/UI/organisms/task/cards/CardTask';
import { ButtonLogin } from '@/UI/atoms/button/ButtonLogin';
import { ButtonLogout } from '@/UI/atoms/button/ButtonLogout';
import { NavBar } from '@/UI/molecules/nav/NavBar';

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

	const [hidden, setHidden] = useState(true);

	const showModal = () => {
		setHidden(!hidden);
	};

	const handleSignOut = () => {};

	return (
		<MainLayout
			hasNav={true}
			className='md:pt-[90px]'
		>
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
			<br />
			<br />
			<br />
			<br />
			<br />
		</MainLayout>
	);
};

export default withAuthenticationRequired(Home, {
	onRedirecting: () => <Loader />,
	onBeforeAuthentication: () =>
		new Promise(() => {
			redirectToLoginPage();
		}),
});

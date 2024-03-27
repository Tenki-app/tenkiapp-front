import { Button } from '@/UI/atoms/button/Button';
import { Text } from '@/UI/atoms/text/Text';
import { Title } from '@/UI/atoms/text/Title';
import { MainLayout } from '@/UI/layouts/MainLayout';
import PageNotFound from '@/svg/notFound/PageNotFound.svg';
import LeftArrow from '@/svg/notFound/leftArrow.svg';
import { useTranslation } from 'react-i18next';
const NotFound = () => {
	const { t } = useTranslation();
	return (
		<>
			<MainLayout
				className='md:pt-[90px]'
				hasNav={true}
			>
				<div className='flex flex-col items-center justify-evenly h-[80%]'>
					<Title
						type='title'
						className='!font-bold text-[100px] mt-[20px] mb-[20px]'
					>
						404
					</Title>
					<PageNotFound className='h-[226px] w-[205px]' />
					<Text
						variant='default'
						className='font-bold text-[20px] text-center w-[243px]'
					>
						{t('notFoundMessage')}
					</Text>
					<Button
						variant='blue'
						className='flex justify-center'
					>
						<LeftArrow className='h-[29px] w-[25px] mr-[20px]' />
						{t('backButton')}
					</Button>
				</div>
			</MainLayout>
		</>
	);
};
export default NotFound;

import { MainLayout } from '@/UI/layouts/MainLayout';

const Profile = () => {
	return (
		<>
			<MainLayout
				className='md:pt-[90px]'
				hasMobileNav={true}
			>
				<p> Profile page!</p>
			</MainLayout>
		</>
	);
};
export default Profile;

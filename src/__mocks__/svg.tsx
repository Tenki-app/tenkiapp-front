import React from 'react';

const MockSvgIcon = () => {
	return (
		<svg
			data-testid='mock-svg'
			viewBox='0 0 24 24'
			width='24'
			height='24'
		>
			<path
				d='M12.9795 22C18.5025 22 22.9795 17.523 22.9795 12C22.9795 6.477 18.5025 2 12.9795 2C7.45649 2 2.97949 6.477 2.97949 12C2.97949 17.523 7.45649 22 12.9795 22Z'
				stroke='CURRENTcOLOR'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9.97949 12L11.9795 14L15.9795 10'
				stroke='CURRENTcOLOR'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default MockSvgIcon;

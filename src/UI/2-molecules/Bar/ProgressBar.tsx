type TypeProgressBarProps = {
	containerStyles?: string;
	progressPercent: number;
};

const ProgressBar = ({
	containerStyles,
	progressPercent,
}: TypeProgressBarProps) => {
	const widthStyle = `w-${progressPercent}%`;

	return (
		<div
			className={`w-full bg-white flex justify-start p-[6px] rounded-md ${
				containerStyles ?? ''
			}`}
		>
			<div
				className={`bg-dark-blue main-transition h-[8px] rounded-md ${widthStyle}`}
				style={{
					width: `${progressPercent}%`,
				}}
			/>
		</div>
	);
};

export { ProgressBar };

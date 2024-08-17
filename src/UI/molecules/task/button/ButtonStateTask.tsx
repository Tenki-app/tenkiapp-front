import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useCloseWhenClickOutside } from '@/lib/hooks/utils/useCloseWhenClickOutside';

import { UpdateStatusTask } from '@/UI/molecules/task/UpdateStatusTask';
import { Button } from '@/UI/atoms/button/Button';
import { ModalCustomPositionTemplate } from '../../modal/ModalCustomPositionTemplate';

import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

import type { TypeTaskState } from '@/lib/types/tasks';

type TypeButtonStateTaskProps = {
	taskState: TypeTaskState;
	showStatusModal: boolean;
	setShowStatusModal: (value: boolean) => void;
	isUpdateStatusActive?: boolean;
	handleUpdateStatus: (stateToUpdate: TypeTaskState) => void;
};

const ButtonStateTask = ({
	taskState,
	showStatusModal,
	setShowStatusModal,
	isUpdateStatusActive,
	handleUpdateStatus,
}: TypeButtonStateTaskProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const stateButtonRef = useRef<HTMLDivElement>(null);

	const onClickStatusButton = () => {
		if (!isUpdateStatusActive) {
			return;
		}

		setShowStatusModal(true);
	};

	const renderStatus = () => {
		const iconStyles = 'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px]';
		if (taskState === 'done') {
			return <DoneIcon className={`${iconStyles}`} />;
		}
		if (taskState === 'pending') {
			return <PendingIcon className={`${iconStyles}`} />;
		}
		if (taskState === 'progress') {
			return <InProgressIcon className={`${iconStyles}`} />;
		}
	};

	let stateButtonCoordinates;

	if (stateButtonRef.current) {
		stateButtonCoordinates = stateButtonRef.current.getBoundingClientRect();
	}

	useCloseWhenClickOutside({
		showElement: showStatusModal,
		setShowElement: setShowStatusModal,
		elementRef: modalRef,
	});

	return (
		<>
			{createPortal(
				<ModalCustomPositionTemplate
					showModal={showStatusModal}
					setShowModal={setShowStatusModal}
					isCloseWhenClickOutside={false}
				/>,
				document.body
			)}
			<div className='relative w-fit h-fit'>
				<div ref={stateButtonRef}>
					<Button
						variant='custom'
						onClick={(e) => {
							e.stopPropagation();
							onClickStatusButton();
						}}
						className={`z-20 ${
							!isUpdateStatusActive ? 'cursor-default' : ''
						}`}
					>
						{renderStatus()}
					</Button>
				</div>
				{showStatusModal && (
					<>
						{createPortal(
							<div
								className={`fixed z-50`}
								style={{
									left: stateButtonCoordinates?.left,
									top:
										(stateButtonCoordinates?.top ?? 0) + 40,
								}}
								ref={modalRef}
							>
								<UpdateStatusTask
									handleUpdateStatus={handleUpdateStatus}
								/>
							</div>,
							document.body
						)}
					</>
				)}
			</div>
		</>
	);
};

export { ButtonStateTask };

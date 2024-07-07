import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";

import Portal, { createContainer } from "../Portal";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
	onClose?: () => void;
	children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
	const { onClose, children } = props;

	const rootRef = useRef<HTMLDivElement>(null);
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID });
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleWrapperClick = (event: MouseEvent) => {
			const { target } = event;

			if (target instanceof Node && rootRef.current === target) {
				onClose?.();
			}
		};
		const handleEscapePress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		};

		window.addEventListener("click", handleWrapperClick);
		window.addEventListener("keydown", handleEscapePress);

		return () => {
			window.removeEventListener("click", handleWrapperClick);
			window.removeEventListener("keydown", handleEscapePress);
		};
	}, [onClose]);

	const handleClose: MouseEventHandler<
		HTMLDivElement | HTMLButtonElement
	> = useCallback(() => {
		onClose?.();
	}, [onClose]);

	return isMounted ? (
		<Portal id={MODAL_CONTAINER_ID}>
			<div ref={rootRef} className="relative z-10">
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
						<div
							className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							<button
								type="button"
								className='absolute right-3 top-3'
								onClick={handleClose}
								data-testid="modal-close-button"
							>
								Х
							</button>
							{ children }
						</div>
					</div>
				</div>
			</div>
		</Portal>
	) : null;
};

export default Modal;

import { FC } from 'react';
import classNames from 'classnames';

import { HeartIcon, LibraIcon, MailIcon, PhoneCircuitIcon, ShareIcon } from '../../Lib/Icons';

interface ActionsBlockProps {
	className: string
	isBookmarks: boolean
	isComparison: boolean
	handleClickBookmarks: () => void
	handleClickComparison: () => void
	openModal: (type: 'QuickOrder' | 'OnlineInstallment' | 'DeliveryCalculation' | 'Callback' | 'AddAsk') => void
}

export const ActionsBlockComponent: FC<ActionsBlockProps> = ({ className, isBookmarks, isComparison, handleClickBookmarks, handleClickComparison, openModal }) => {
	return <div className={ classNames('gap-1.5 xl:gap-2.5 h-full', className) }>
		<button onClick={() => openModal('Callback')} className='p-3 bg-blue-50 rounded-full group'>
			<PhoneCircuitIcon className='stroke-gray-500 group-hover:stroke-blue-500'/>
		</button>
		<button onClick={() => openModal('AddAsk')} className='p-3 bg-blue-50 rounded-full group'>
			<MailIcon className='stroke-gray-500 group-hover:stroke-blue-500'/>
		</button>
		<div className='p-3 bg-blue-50 rounded-full group'>
			<ShareIcon className='fill-gray-500 group-hover:fill-blue-500'/>
		</div>
		<button onClick={ () => handleClickBookmarks() } className='p-3 bg-blue-50 rounded-full group'>
			<HeartIcon className={classNames('group-hover:stroke-blue-500 w-4 h-4', { 'stroke-blue-500 fill-blue-500': isBookmarks, 'stroke-gray-500': !isBookmarks })} />
		</button>
		<button onClick={ () => handleClickComparison() } className='p-3 bg-blue-50 rounded-full group'>
			<LibraIcon className={classNames('group-hover:fill-blue-500 w-4 h-4', { 'fill-blue-500': isComparison, 'fill-gray-500': !isComparison })} />
		</button>
	</div>
};

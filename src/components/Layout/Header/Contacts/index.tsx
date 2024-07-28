import React from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../../hooks';
import { ChevronDownIcon, PhoneIcon } from '../../../Lib/Icons';

import vodafoneLogo from '../../../../assets/vodafone-logo.png';
import kievstarLogo from '../../../../assets/kievstar-logo.png';
import lifeLogo from '../../../../assets/life-logo.png';

interface ContactsProps {
	className?: string
}

export const Contacts: React.FC<ContactsProps> = ({ className }) => {
	const [ showOptions, setShowOptions ] = React.useState(false);
	const t = useAppTranslation();

	return <div className={classNames('relative text-left', className)}>
		<button type="button" onClick={() => setShowOptions(prev => !prev)}
						className="flex items-center w-full justify-center gap-x-2.5 lg:gap-x-1.5 lg:bg-white text-sm"
						id="menu-button" aria-expanded="true" aria-haspopup="true">
			<div className='bg-blue-500 lg:bg-transparent p-2 lg:p-0 rounded-full'>
				<PhoneIcon className='fill-white lg:fill-blue-500'/>
			</div>
			<div className='font-bold hidden lg:block'>0 800 334 XXX</div>
			<div className='hidden lg:block'>({t('free')})</div>
			<div className={classNames('transition-transform', {'rotate-180': showOptions})}>
				<ChevronDownIcon className='stroke-white lg:stroke-black' />
			</div>
		</button>
		<div
			className={classNames('absolute left-0 lg:left-auto lg:right-0 z-10 mt-2 w-48 origin-top-right border border-gray-200 bg-white shadow-lg p-5 rounded-sm', {hidden: !showOptions})}
			role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
			<div className="py-1 text-black" role="none">
				<div className='flex items-center'>
					<img src={vodafoneLogo} alt="vodafone-logo"/>
					<span className='ml-2.5 font-medium'>
								(050) 337 32 05
							</span>
				</div>
				<div className='flex items-center mt-3'>
					<img src={kievstarLogo} alt="kievstar-logo"/>
					<span className='ml-2.5 font-medium'>
								(067) 323 44 81
							</span>
				</div>
				<div className='flex items-center mt-3'>
					<img src={lifeLogo} alt="life-logo"/>
					<span className='ml-2.5 font-medium'>
								(093) 332 64 71
							</span>
				</div>
			</div>
		</div>
	</div>
}

import { FC, useState } from 'react';
import classNames from 'classnames';

import { config } from '../../../../config';

import { formatPhoneNumber, formatFreePhoneNumber } from '../../../../lib';
import { useAppTranslation } from '../../../../hooks';
import { ChevronDownIcon, PhoneIcon } from '../../../Lib/Icons';

import vodafoneLogo from '../../../../assets/vodafone-logo.png';
import kievstarLogo from '../../../../assets/kievstar-logo.png';
import lifecellLogo from '../../../../assets/life-logo.png';

import { PhoneLogo } from '../../../../models/config';

const phoneLogos: Record<PhoneLogo, string> = {
	vodafone: vodafoneLogo,
	kievstar: kievstarLogo,
	lifecell: lifecellLogo,
};

interface ContactsProps {
	className?: string
}

export const Contacts: FC<ContactsProps> = ({ className }) => {
	const [ showOptions, setShowOptions ] = useState(false);
	const t = useAppTranslation();

	return <div className={className}>
		<div className='relative max-w-max mx-auto'>
			<button type="button" onClick={() => setShowOptions(prev => !prev)}
							className="flex items-center w-full justify-center gap-x-2.5 lg:gap-x-1.5 lg:bg-white text-sm"
							id="menu-button" aria-expanded="true" aria-haspopup="true">
				<div className='bg-blue-500 lg:bg-transparent p-2 lg:p-0 rounded-full'>
					<PhoneIcon className='fill-white lg:fill-blue-500'/>
				</div>
				<div className='font-bold hidden lg:block'>
					<a href={`tel:${config.contacts.freePhone}`}>
						{ formatFreePhoneNumber(config.contacts.freePhone) }
					</a>
				</div>
				<div className='hidden lg:block'>({t('free')})</div>
				<div className={classNames('transition-transform', {'rotate-180': showOptions})}>
					<ChevronDownIcon className='stroke-white lg:stroke-black'/>
				</div>
			</button>
			<div
				className={
				classNames('absolute left-0 lg:left-auto lg:right-0 z-10 mt-2 w-48 origin-top-right border border-gray-200 bg-white shadow-lg px-5 py-2 rounded-sm',
					{hidden: !showOptions}
				)}
				role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
				<div className="py-1 text-black" role="none">
					{config.contacts.phone.map(item => {
						return <div key={ item.value } className='flex items-center my-3'>
							<img src={phoneLogos[item.logo]} alt={item.logo + '-logo'} />
							<a href={`tel:${item.value}`} className='ml-2.5 font-medium'>
								{ formatPhoneNumber(item.value) }
							</a>
						</div>
					})}
				</div>
			</div>
		</div>
	</div>
}

import React from 'react';
import classNames from 'classnames';

import { config } from '../../../config';

import { Link, formatPhoneNumber, formatFreePhoneNumber } from '../../../lib';
import { useAppSelector, useAppTranslation } from '../../../hooks';
import { OurAdvantages } from '../../Home';

import { ChevronDownIcon, EmailIcon, PhoneIcon } from '../../Lib/Icons';

import vodafoneLogo from '../../../assets/vodafone-logo.png';
import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifecellLogo from "../../../assets/life-logo.png";
import deliveryIcon from '../../../assets/icons/delivery-icon.svg';
import paymentIcon from '../../../assets/icons/payment-icon.svg';
import guaranteeIcon from '../../../assets/icons/guarantee-icon.svg';

import { PhoneLogo } from '../../../models/config';

const phoneLogos: Record<PhoneLogo, string> = {
	vodafone: vodafoneLogo,
	kievstar: kievstarLogo,
	lifecell: lifecellLogo,
};

export const InfoBlock = () => {
	const [open, setOpen] = React.useState(false);

	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	return <div className='lg:w-64'>
		<div className=' bg-white rounded-2xl px-5 py-7'>
			<div className='font-bold'>{lang === 'ua' ? 'Замовляйте за номерами:' : 'Заказывайте по номерам:'}</div>
			<div className="relative mt-6 inline-block text-left w-full">
				<button type="button" onClick={() => setOpen(prev => !prev)}
								className="flex items-center w-full gap-x-1.5 bg-white text-sm group"
								id="menu-button" aria-expanded="true" aria-haspopup="true">
					<PhoneIcon className='fill-blue-500'/>
					<div
						className={classNames('font-bold uppercase group-hover:text-blue-500', {'text-blue-500': open})}>{t('phones')}</div>
					<div className={classNames('transition-transform', {'rotate-180': open})}>
						<ChevronDownIcon
							className={classNames('stroke-black group-hover:stroke-blue-500', {'stroke-blue-500': open})}/>
					</div>
				</button>
				<div
					className={classNames('absolute right-0 z-10 mt-2 w-56 origin-top-right border border-gray-200 bg-white shadow-lg p-5 rounded-sm', {hidden: !open})}
					role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
					<div className="py-1" role="none">
						<div className='flex items-center'>
							<PhoneIcon className='fill-black'/>
							<a href={ `tel:${config.contacts.freePhone}` } className='ml-2.5 font-medium'>
								{ formatFreePhoneNumber(config.contacts.freePhone) }
							</a>
						</div>
						<div className='text-sm text-gray-500 font-medium'>
							{ lang === 'ua' ? 'Безкоштовно по Україні' : 'Бесплатно по Украине' }
						</div>
						{config.contacts.phone.map(item => {
							return <div key={item.value} className='flex items-center mt-3.5'>
								<img src={phoneLogos[item.logo]} alt={item.logo + '-logo'}/>
								<a href={`tel:${item.value}`} className='ml-2.5 font-medium'>
									{formatPhoneNumber(item.value)}
								</a>
							</div>
						})}
					</div>
				</div>
			</div>
			<div className='flex items-center gap-x-2.5 mt-5'>
				<EmailIcon/>
				<a href={`mailto:${config.contacts.email}`}>
					{config.contacts.email}
				</a>
			</div>
			<div className='mt-5 text-sm pb-4 border-b border-[#D8D8D9] leading-9 whitespace-pre-wrap'>
				{ config.contacts.workSchedule[lang] }
			</div>
			<Link to='/shipment' className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
				<img src={ deliveryIcon } alt=""/>
				<span className='group-hover:underline'>Доставка</span>
			</Link>
			<Link to='/payment' className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
				<img src={ paymentIcon } alt=""/>
				<span className='group-hover:underline'>Оплата</span>
			</Link>
			<Link to='/guarantee-and-refund' className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
				<img src={ guaranteeIcon } alt=""/>
				<span className='group-hover:underline'>{t('warranty and returns', true)}</span>
			</Link>
		</div>
		<OurAdvantages size='small'/>
	</div>
}

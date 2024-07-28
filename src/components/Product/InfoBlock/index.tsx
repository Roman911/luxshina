import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector, useAppTranslation } from '../../../hooks';

import { OurAdvantages } from '../../Home';

import { ChevronDownIcon, EmailIcon, PhoneIcon } from '../../Lib/Icons';

import vodafoneLogo from '../../../assets/vodafone-logo.png';
import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifeLogo from '../../../assets/life-logo.png';
import deliveryIcon from '../../../assets/icons/delivery-icon.svg';
import paymentIcon from '../../../assets/icons/payment-icon.svg';
import guaranteeIcon from '../../../assets/icons/guarantee-icon.svg';

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
							<span className='ml-2.5 font-medium'>0 800 334257</span>
						</div>
						<div
							className='text-sm text-gray-500 font-medium'>{lang === 'ua' ? 'Безкоштовно по Україні' : 'Бесплатно по Украине'}</div>
						<div className='flex items-center mt-3.5'>
							<img src={vodafoneLogo} alt="vodafone-logo"/>
							<span className='ml-2.5 font-medium'>(050) 337 32 05</span>
						</div>
						<div className='flex items-center mt-3'>
							<img src={kievstarLogo} alt="kievstar-logo"/>
							<span className='ml-2.5 font-medium'>(067) 323 44 81</span>
						</div>
						<div className='flex items-center mt-3'>
							<img src={lifeLogo} alt="life-logo"/>
							<span className='ml-2.5 font-medium'>(093) 332 64 71</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-center gap-x-2.5 mt-5'>
				<EmailIcon/>
				<span>info@luxshina.ua</span>
			</div>
			<div className='mt-5 text-sm'>
				<span className='font-bold'>Пн — Пт: </span>9:00 — 18:00
			</div>
			<div className='mt-3 text-sm pb-7 border-b border-[#D8D8D9]'>
				<span className='font-bold'>Сб, {t('sun', true)}: </span>9:00 — 15:00
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

import React from 'react';
import classNames from 'classnames';

import { useAppSelector, useAppTranslation } from '../../hooks';

import { OurAdvantages } from '../Home';

import { Rating } from '../Lib/Rating';
import { CountryInfo } from '../Lib/CountryInfo';
import {
	CartIcon,
	ChevronDownIcon,
	EmailIcon,
	HeartIcon,
	LibraIcon,
	MailIcon,
	PhoneCircuitIcon,
	PhoneIcon,
	ShareIcon
} from "../Lib/Icons";

import deliveryIcon from '../../assets/icons/delivery-icon.svg';
import guaranteeIcon from '../../assets/icons/guarantee-icon.svg';
import paymentIcon from '../../assets/icons/payment-icon.svg';
import truckIcon from '../../assets/icons/truck-icon.svg';

import type { ProductProps } from '../../models/product';
import vodafoneLogo from "../../assets/vodafone-logo.png";
import kievstarLogo from "../../assets/kievstar-logo.png";
import lifeLogo from "../../assets/life-logo.png";

export const ProductComponent: React.FC<ProductProps> = ({ data }) => {
	const [open, setOpen] = React.useState(false);
	const {lang} = useAppSelector(state => state.langReducer)
	const t = useAppTranslation();

	const {id, comments, full_name, offers, min_price, model} = data;

	return <div className='flex justify-between gap-x-6'>
		<div className='max-w-[900px] flex-1 pr-5'>
			<div className='flex border-b border-[#DEE2EB] pb-5'>
				<div className='gallery w-64 h-96 relative'>
					<div className='absolute '>
						<img src="/images/snow-icon.svg" alt=""/>
					</div>
					<img src={`https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/${model.id}.400x400.jpg`} alt=""/>
				</div>
				<div className='flex-1 ml-20'>
					<h1 className='text-2xl font-bold'>{full_name}</h1>
					<div className='flex mt-5 items-center'>
						<div className='text-[15px] text-gray-500 bg-blue-50 rounded-full py-2 px-3 mr-5'>Артикул: {id}</div>
						<Rating commentsCount={comments.count} commentsAvgRate={comments.rate}/>
					</div>
					<div className='flex justify-between mt-11'>
						<div>
							<div className='flex items-end'>
								<div className='mr-2.5 text-xl font-medium'>{t('from')}</div>
								<div className='text-4xl font-bold mr-2.5'>{min_price} ₴</div>
								<div className='text-xl font-medium'>/шт.</div>
							</div>
							<div className='mt-3 text-gray-500'>{t('from')} <span className='font-bold'>{min_price * 4}</span> за 4
								шт.
							</div>
						</div>
						<div className='flex gap-2.5 h-full'>
							<div className='p-3 bg-blue-50 rounded-full group hover:cursor-pointer'>
								<PhoneCircuitIcon className='stroke-gray-500 group-hover:stroke-blue-500'/>
							</div>
							<div className='p-3 bg-blue-50 rounded-full group hover:cursor-pointer'>
								<MailIcon className='stroke-gray-500 group-hover:stroke-blue-500'/>
							</div>
							<div className='p-3 bg-blue-50 rounded-full group hover:cursor-pointer'>
								<ShareIcon className='fill-gray-500 group-hover:fill-blue-500'/>
							</div>
							<div className='p-3 bg-blue-50 rounded-full group hover:cursor-pointer'>
								<HeartIcon className='stroke-gray-500 group-hover:stroke-blue-500 w-4 h-4'/>
							</div>
							<div className='p-3 bg-blue-50 rounded-full group hover:cursor-pointer'>
								<LibraIcon className='fill-gray-500 group-hover:fill-blue-500 w-4 h-4'/>
							</div>
						</div>
					</div>
					<div className='mt-7'>
						{offers.map(item => {
							return <div key={item.cdate} className='grid grid-cols-9 gap-4 mt-3'>
								<div className='flex flex-row col-span-2 relative cursor-pointer'>
									<input type="checkbox" id="cb1" value="cb1" className='appearance-none h-6 w-6 bg-white rounded-full border border-zinc-400 hover:border-blue-500 checked:border-blue-500 transition-all duration-200 peer'/>
									<div
										className='h-4 w-4 absolute inset-1 rounded-full pointer-events-none peer-checked:border-blue-500 peer-checked:bg-blue-500'/>
									<label htmlFor='cb1' className='flex ml-7 flex-col justify-center text-[13px] font-medium select-none'>{item.in_stock} шт.</label>
								</div>
								<div className='col-span-4'>
									<CountryInfo country={lang === 'ua' ? item.country_name_ua : item.country_name} countryCode={item.country_iso_a2} year={item.year}/>
								</div>
								<div className='col-span-2 text-[13px] font-bold content-center'>{item.price} грн</div>
							</div>
						})}
					</div>
				</div>
			</div>
			<div className='flex justify-between mt-10'>
				<div>
					<div className='flex items-center'>
						<div className='flex gap-1.5'>
							<button
								className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>-
							</button>
							<input className='w-10 rounded-sm border border-[#C1C4CC] text-center font-medium' placeholder='4' type="text"/>
							<button
								className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>+
							</button>
						</div>
						<div className='ml-6 text-2xl font-bold'>{min_price * 4} ₴</div>
					</div>
					<button className='btn secondary mt-6 text-sm font-medium border border-black'>
						<img className='mr-2.5' src={truckIcon} alt=""/>
						{t('delivery calculation', true)}
					</button>
				</div>
				<div>
					<button className='btn primary uppercase'>
						<CartIcon className='stroke-white'/>
						<span className='ml-2.5'>{t('buy')}</span>
					</button>
					<button className='btn secondary uppercase mt-2.5'>
						<span className='ml-2.5'>{t('quick order')}</span>
					</button>
					<button className='btn success uppercase mt-2.5'>
						<span className='ml-2.5'>{t('installment plan')}</span>
					</button>
				</div>
			</div>
		</div>
		<div className='w-64'>
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
				<div className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
					<img src={deliveryIcon} alt=""/>
					<span className='group-hover:underline'>Доставка</span>
				</div>
				<div className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
					<img src={paymentIcon} alt=""/>
					<span className='group-hover:underline'>Оплата</span>
				</div>
				<div className='mt-6 flex items-center gap-x-2.5 font-medium text-blue-500 group'>
					<img src={guaranteeIcon} alt=""/>
					<span className='group-hover:underline'>{t('warranty and returns', true)}</span>
				</div>
			</div>
			<OurAdvantages size='small' />
		</div>
	</div>
}

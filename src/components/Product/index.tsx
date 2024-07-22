import React from 'react';

import { useAppSelector, useAppTranslation } from '../../hooks';

import { InfoBlock } from './InfoBlock';

import { CountryInfo, Rating } from '../Lib';
import {
	CartIcon,
	HeartIcon,
	InfoIcon,
	LibraIcon,
	MailIcon,
	PhoneCircuitIcon,
	ShareIcon
} from "../Lib/Icons";

import truckIcon from '../../assets/icons/truck-icon.svg';

import type { ProductProps } from '../../models/product';

interface ProductComponentProps extends ProductProps {
	handleModalOpen: (type: 'QuickOrder' | 'OnlineInstallment') => void
}

export const ProductComponent: React.FC<ProductComponentProps> = ({ data, handleModalOpen }) => {
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
					<button onClick={() => handleModalOpen('QuickOrder')} className='btn secondary uppercase mt-2.5'>
						<span className='ml-2.5'>{t('quick order')}</span>
					</button>
					<button onClick={() => handleModalOpen('OnlineInstallment')} className='btn success uppercase mt-2.5'>
						<span className='ml-2.5'>{t('installment plan')}</span>
					</button>
				</div>
			</div>
			<div className='mt-16'>
				<div className='flex gap-x-2.5 border-b border-[#E0E4E8]'>
					<button
						className='py-4 px-5 bg-[#171719] rounded-t text-white text-sm font-bold uppercase focus:outline-none focus:shadow-outline-blue transition-all duration-300'>
						{ t('main characteristics') }
					</button>
					<button
						className='py-4 px-5 min-w-32 bg-zinc-200 rounded-t text-sm font-bold text-[#575C66] uppercase focus:outline-none focus:shadow-outline-blue transition-all duration-300'>
						{ t('description') }
					</button>
					<button
						className='py-4 px-5 min-w-32 bg-zinc-200 rounded-t text-sm font-bold text-[#575C66] uppercase focus:outline-none focus:shadow-outline-blue transition-all duration-300'>
						{ t('reviews') } (5)
					</button>
				</div>
				<div className='flex mt-4 gap-10'>
					<div className='flex-1'>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								<InfoIcon className='fill-[#7D92B2] mr-2.5 mb-0.5'/>
								Ширина
							</div>
							<div className='text-blue-500'>175</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								<InfoIcon className='fill-[#7D92B2] mr-2.5 mb-0.5'/>
								Висота
							</div>
							<div className='text-blue-500'>70</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								<InfoIcon className='fill-[#7D92B2] mr-2.5 mb-0.5'/>
								Діаметр
							</div>
							<div className='text-blue-500'>13</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								<InfoIcon className='fill-[#7D92B2] mr-2.5 mb-0.5'/>
								Індекс швидкості
							</div>
							<div className='text-blue-500 max-w-max w-full'>Н (210 км)</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								<InfoIcon className='fill-[#7D92B2] mr-2.5 mb-0.5'/>
								Індекс навантаження
							</div>
							<div className='text-blue-500 max-w-max w-full'>82 (475 кг)</div>
						</div>
					</div>
					<div className='flex-1'>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								Бренд
							</div>
							<div className='text-blue-500'>Uniroyal</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								Модель
							</div>
							<div className='text-blue-500'>WinterExpert</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								Призначення
							</div>
							<div className='text-blue-500'>легкові</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								Сезон
							</div>
							<div className='text-blue-500 max-w-max w-full'>зимові шини</div>
						</div>
						<div className='flex my-4 text-sm font-medium'>
							<div
								className='w-full flex items-center text-[#575C66] after:flex-1 after:min-w-6 after:border-b after:border-dashed after:border-[#AEB6C2] after:h-px after:mt-3 after:mx-2'>
								Типорозмір
							</div>
							<div className='text-blue-500 max-w-max w-full'>195/65 R1</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<InfoBlock/>
	</div>
}

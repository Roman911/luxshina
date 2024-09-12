import { FC, useState } from 'react';
import './index.scss';

import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { addCart } from '../../store/reducers/cartSlice';
import { InfoBlock } from './InfoBlock';
import { ActionsBlock } from './ActionsBlock';
import { ImgGallery } from './ImageGallery';
import { CharacteristicsBlock } from './CharacteristicsBlock';

import { countryCodeTransform, Link } from '../../lib';
import { CountryInfo, Rating, Spinner } from '../Lib';
import { CartIcon } from "../Lib/Icons";

import truckIcon from '../../assets/icons/truck-icon.svg';

import { Language } from '../../models/language';
import type { ProductProps } from '../../models/product';

interface ProductComponentProps {
	data: ProductProps | undefined
	isLoading: boolean
	handleModalOpen: (type: 'QuickOrder' | 'OnlineInstallment') => void
}

export const ProductComponent: FC<ProductComponentProps> = ({ data, isLoading, handleModalOpen }) => {
	const [toCart, setToCart] = useState(false);
	const { lang } = useAppSelector(state => state.langReducer);
	const dispatch = useAppDispatch();
	const t = useAppTranslation();

	const { id = 0, full_name = '', offers = [], min_price = 0, photo, model } = data?.data || {};
	const images = [{
		original: photo?.url_part2 || '',
		thumbnail: photo?.url_part || '',
	}];

	const onClick = () => {
		setToCart(true);
		dispatch(addCart(model ? model.id : 0));
	}

	return <section className='product-page flex flex-col lg:flex-row justify-between gap-1 xl:gap-x-6'>
		<div className='max-w-[900px] flex-1 pr-3 xl:pr-5'>
			<Spinner height='h-96' show={ isLoading }>
				{data?.result &&
					<div className='flex flex-col md:flex-row items-center md:items-start md:border-b border-[#DEE2EB] pb-5'>
						<div className='gallery w-64 relative mb-7'>
							<div className='absolute '>
								<img src="/images/snow-icon.svg" alt=""/>
							</div>
							<ImgGallery images={ images } />
						</div>
						<ActionsBlock className='flex md:hidden'/>
						<div className='flex-1 md:ml-6 xl:ml-20'>
							<h1 className='text-2xl font-bold mt-8 md:mt-0'>{ full_name }</h1>
							<div className='flex mt-5 items-center'>
								<div className='text-[15px] text-gray-500 bg-blue-50 rounded-full py-1 md:py-2 px-3 mr-5'>Артикул: {id}</div>
								<Rating commentsCount={ undefined } commentsAvgRate={ 0 }/>
							</div>
							<div className='flex justify-between mt-7 md:mt-11'>
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
								<ActionsBlock className='hidden md:flex' />
							</div>
							<div className='offers mt-7'>
								{offers.map(item => {
									return <div key={item.offer_id} className='offers__item grid md:grid-cols-9 gap-4 mt-3 py-3.5 md:py-0 px-5 md:px-0 bg-white md:bg-transparent border md:border-0 rounded-full'>
										<div className='input flex flex-row md:col-span-2 relative cursor-pointer'>
											<input type="checkbox" id="cb1" value="cb1" className='appearance-none h-6 w-6 bg-white rounded-full border border-zinc-400 hover:border-blue-500 checked:border-blue-500 transition-all duration-200 peer'/>
											<div
												className='h-4 w-4 absolute inset-1 rounded-full pointer-events-none peer-checked:border-blue-500 peer-checked:bg-blue-500'/>
											<label htmlFor='cb1' className='flex ml-2.5 md:ml-7 flex-col justify-center text-sm font-medium select-none'>{item.quantity} шт.</label>
										</div>
										<div className='country md:col-span-4'>
											<CountryInfo country={lang === Language.UA ? item.country : item.country_ru} countryCode={countryCodeTransform(item.country)} year={item.year}/>
										</div>
										<div className='price md:col-span-2 text-lg md:text-sm font-bold content-center'>{item.price} грн</div>
									</div>
								})}
							</div>
						</div>
					</div>}
			</Spinner>
			<div className='purchase-information grid justify-self-stretch mt-5 md:mt-10'>
				<div className='quantity flex items-center'>
					<div className='flex gap-1.5'>
						<button
							className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>-
						</button>
						<input className='w-10 rounded-sm border border-[#C1C4CC] text-center font-medium' placeholder='4' type="text"/>
						<button
							className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>+
						</button>
					</div>
					<div className='ml-6 text-4xl md:text-2xl font-bold'>{ min_price * 4 } ₴</div>
				</div>
				<button
					className='delivery-calculation btn secondary mt-6 text-sm font-medium border border-black w-full md:w-72'>
					<img className='mr-2.5' src={truckIcon} alt=""/>
					{t('delivery calculation', true)}
				</button>
				<div className='buttons-buy md:justify-self-end mt-8 md:0'>
					{toCart ?
						<Link to={`/cart`} className='btn success uppercase w-full md:w-72'>
							<span className='ml-2.5'>Перейти до кошика</span>
						</Link> :
						<button onClick={() => onClick()} className='btn primary uppercase w-full md:w-72'>
							<CartIcon className='stroke-white'/>
							<span className='ml-2.5'>{t('buy')}</span>
						</button>
					}
					<button onClick={() => handleModalOpen('QuickOrder')}
									className='btn secondary uppercase mt-2.5 w-full md:w-72'>
						<span className='ml-2.5'>{t('quick order')}</span>
					</button>
					<button onClick={() => handleModalOpen('OnlineInstallment')}
									className='btn success uppercase mt-2.5 w-full md:w-72'>
						<span className='ml-2.5'>{t('installment plan')}</span>
					</button>
				</div>
			</div>
			<CharacteristicsBlock/>
		</div>
		<InfoBlock/>
	</section>
}

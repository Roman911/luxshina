import { FC } from 'react';

import { useAppSelector, useAppTranslation } from '../../hooks';
import { itemProps } from '../../models/productCard';
import { Language } from '../../models/language';

interface ComparisonProps {
	data: itemProps[]
}

export const ComparisonComponent: FC<ComparisonProps> = ({ data }) => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	return <div className='flex relative'>
		{data.length === 0 ?
			<div className='py-5 px-5 text-center bg-blue-100 w-full mt-4 text-lg font-medium'>
				{ lang === Language.UA ? 'Ви ще не додали в порівняння жодного товару' : 'Вы не добавили в сравнение ни одного товара' }
			</div> : <>
				<div className='w-28 md:w-60 px-2'>
					<div>Скинути все</div>
					<div className='mt-56 text-center md:text-end font-bold'>
						<div className='p-2.5'>Сезон:</div>
						<div className='p-2.5'>{ t('car type', true) }:</div>
						<div className='p-2.5'>{ t('profile height', true) }:</div>
					</div>
				</div>
				<div className='flex-1 w-[calc(100%-15rem)]'>
					<div className='flex overflow-x-auto whitespace-nowrap max-w-full'>
						{data.map(item => {
							return <div key={item.group}>
								<div className='w-60 relative m-1'>
									<img src="https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/5558.400x400.jpg" alt=""/>
									<div className='absolute bottom-0 bg-gray-500 rounded-sm h-20 flex items-center w-full'>
										<p className='text-white text-center font-bold'>{item.full_name}</p>
									</div>
								</div>
								<div className='divide-y divide-[#D0D4D9] text-center'>
									<div className='p-2.5'>зимові</div>
									<div className='p-2.5'>175</div>
									<div className='p-2.5'>65</div>
									<div className='p-2.5'>{item.diameter}</div>
									<div className='p-2.5'>12 (до 63 кг)</div>
									<div className='p-2.5'>A2 (до 10 км/г)</div>
									<div className='p-2.5'>TL Tubeless</div>
									<div className='p-2.5'>RunFlat</div>
									<div className='p-2.5'>США</div>
								</div>
							</div>
						})}
					</div>
				</div>
			</>
		}
	</div>
}

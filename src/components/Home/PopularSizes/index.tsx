import { useAppSelector } from '../../../hooks/redux';

import { Title } from '../Title';
import { PopularItem } from '../../Lib/PopularItem';

import { popularSizes } from './popularSizes.ts';

export const PopularSizes = () => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <div className='mt-28'>
		<Title title={ lang === 'ua' ? 'Популярні розміри легкових шин' : 'Популярные размеры легковых шин' } />
		<div className='grid grid-cols-9 mt-12 gap-x-5'>
			{popularSizes.map(item => {
				return <div key={ item.size }>
					<div className='text-center text-lg font-bold mb-4'>{ item.size }</div>
					{item.items.map((i, index) => {
						return <PopularItem key={ index } label={ i.label } link={ i.link } />
					})}
				</div>
			})}
		</div>
	</div>
}

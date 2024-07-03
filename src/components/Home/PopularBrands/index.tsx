import { Link } from 'react-router-dom';

import { useAppSelector, useAppTranslation } from '../../../hooks';

import { PopularItem, Title } from '../../Lib';

import { popularBrands } from './popularBrands';

export const PopularBrands = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	return <div className='mt-24'>
		<Title title={ lang === 'ua' ? 'Популярні марки авто' : 'Популярные марки авто' } />
		<div className='grid grid-cols-6 mt-12 gap-x-5 mb-8'>
			{popularBrands.map((i, index) => {
				return <PopularItem key={ index } label={ i.label } link={ i.link } />
			})}
		</div>
		<Link className='uppercase font-bold text-blue-500' to='/' >{ t('show all') }</Link>
	</div>
}

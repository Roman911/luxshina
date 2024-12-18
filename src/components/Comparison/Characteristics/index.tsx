import { FC } from 'react';

import { useAppSelector, useAppTranslation } from '../../../hooks';
import { characteristics } from './characteristics';
import { SeasonTransform, VehicleTypeTransform } from '../../../lib';
import type { Product } from '../../../models/products';
import { Language } from '../../../models/language';

interface Item {
	season: string | false
	vehicle_type: string | false
	width: string | false
	height: string | false
	diameter: string | false
	homologation: string | false
}

interface CharacteristicsProps {
	name: 'tires' | 'cargo' | 'disks' | 'battery'
	item: Product
}

const Item = ({ content }: { content: string }) => {
	return <div  className='h-11 leading-[44px]'>
		{ content }
	</div>
}

export const Characteristics: FC<CharacteristicsProps> = ({ name, item  }) => {
	const t = useAppTranslation();
	const { lang } = useAppSelector(state => state.langReducer);

	return characteristics[name].map((i, index) => {
		if(i === 'season') {
			return <Item key={ index } content={ item.season ? t(SeasonTransform(item.season)?.name || '-', true) : '-' } />
		} else if(i === 'vehicle_type') {
			return <Item key={ index } content={ item.vehicle_type ? t(VehicleTypeTransform(item.vehicle_type)?.name || '-', true) : '-' } />
		} else if(i === 'country') {
			return <Item key={ index } content={ item.best_offer.country ? lang === Language.UA ? item.best_offer.country : item.best_offer.country_ru : '-' } />
		} else if(i === 'price') {
			return <div key={ index } className='h-11 leading-[44px] font-bold bg-[#E1E8F5]'>
				{ item.best_offer.price } ₴
			</div>
		} else if(i === 'load_index') {
			return <Item key={ index } content={ (item.load_index && item.load_index_ru) ? lang === Language.UA ? item.load_index : item.load_index_ru : '-' } />
		} else if(i === 'speed_index') {
			return <Item key={ index } content={ (item.speed_index && item.speed_index_ru) ? lang === Language.UA ? item.speed_index : item.speed_index_ru : '-' } />
		} else if(i === 'strengthening') {
			return <Item key={ index } content={ item.run_flat ? 'RunFlat' : '-' } />
		}
		return <Item key={index} content={item[i as keyof Item] || '-'}/>
	})
};

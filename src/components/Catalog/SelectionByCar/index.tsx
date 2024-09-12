import { useAppSelector } from '../../../hooks';
import { baseDataAPI } from '../../../services/baseDataService';
import { Subsection } from '../../../models/filter';
import { Link } from '../../../lib';

export const SelectionByCar = () => {
	const { subsection } = useAppSelector(state => state.filterReducer);
	const { filter } = useAppSelector(state => state.filterCarReducer);
	const { data } = baseDataAPI.useFetchKitTyreSizeQuery(`${filter.modification}`);

	if(subsection === Subsection.ByParams || data?.length === 0) return null;

	return <div className='mb-5 border-y py-4'>
		<div className='text-gray-500'>Ваш авто:</div>
		<div className='font-bold mt-2'>
			{ `${ data?.[0].kits.car2_model.car2_brand.name } ${ data?.[0].kits.car2_model.name } ${ data?.[0].kits.name } (${ data?.[0].kits.year })` }
		</div>
		<h6 className='text-gray-500 mt-4'>Заводські</h6>
		<div className='flex gap-2 text-sm font-bold mt-2'>
			{data?.filter(i => i.type === 1).map(item => {
				return <Link className='text-blue-500' key={ item.value } to={ `?width=${ item.width }&height=${ item.height }&radius=${ item.diameter }` } >
					{ `${ item.width }/${ item.height } R${ item.diameter }` }
				</Link>
			})}
		</div>
		<h6 className='text-gray-500 mt-4'>Альтернатива</h6>
		<div className='flex flex-wrap gap-2 text-sm font-bold mt-2'>
			{data?.filter(i => i.type === 2).map(item => {
				return <Link className='text-blue-500' key={ item.value } to={ `?width=${ item.width }&height=${ item.height }&radius=${ item.diameter }` } >
					{ `${ item.width }/${ item.height } R${ item.diameter }` }
				</Link>
			})}
		</div>
	</div>
};

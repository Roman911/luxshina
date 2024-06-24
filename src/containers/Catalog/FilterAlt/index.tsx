import { useAppTranslation } from '../../../hooks/translation.ts';

export const FilterAlt = () => {
	const t = useAppTranslation();

	return <div className='filter w-64'>
		<div className='filter-tabs'>
			<button>{t('tires', true)}</button>
			<button>Диски</button>
		</div>
		Filter
	</div>
}

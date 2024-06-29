import { useAppSelector } from '../../../hooks/redux';
import { useAppTranslation } from '../../../hooks/translation';

import { Title } from '../Title';

import icon1 from '../../../assets/our_advantages/item-oa-1.svg';
import icon2 from '../../../assets/our_advantages/item-oa-2.svg';
import icon3 from '../../../assets/our_advantages/item-oa-3.svg';
import icon4 from '../../../assets/our_advantages/item-oa-4.svg';

export const OurAdvantages = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	return <div className='mt-24 bg-white py-24 px-28'>
		<Title title={ t('our advantages', true) } />
		<div className='grid grid-cols-2 mt-14 gap-y-12 text-2xl leading-9'>
			<div className='flex items-center'>
				<img className='mr-6' src={icon1} alt=""/>
				{lang === 'ua' ?
					<h4>На шинному ринку з <span className='font-bold'>2008 року</span></h4> :
					<h4>На шинном рынке с <span className='font-bold'>2008 года</span></h4>}
			</div>
			<div className='flex items-center'>
				<img className='mr-6' src={icon2} alt=""/>
				{lang === 'ua' ?
					<h4><span className='font-bold'>Повний</span> цикл обслуговування в Києві (замовлення, доставка, установка, зберігання)</h4> :
					<h4><span className='font-bold'>Полный</span> цикл обслуживания в Киеве (заказ, доставка, установка, хранение)</h4>}
			</div>
			<div className='flex items-center'>
				<img className='mr-6' src={icon3} alt=""/>
				{lang === 'ua' ?
					<h4>Зареєстрована торгова марка <span className='font-bold'>LuxShina TM</span></h4> :
					<h4>Зарегистрированная торговая марка <span className='font-bold'>LuxShina TM</span></h4>}
			</div>
			<div className='flex items-center'>
				<img className='mr-6' src={icon4} alt=""/>
				{lang === 'ua' ?
					<h4>Швидка доставка по Україні <span className='font-bold'>(Нова пошта, Meest)</span></h4> :
					<h4>Быстрая доставка по Украине <span className='font-bold'>(Новая почта, Meest)</span></h4>}
			</div>
		</div>
	</div>
}

import React from 'react';
import classNames from 'classnames';

import { useAppSelector, useAppTranslation } from '../../../hooks';

import { Title } from '../Title';

import icon1 from '../../../assets/our_advantages/item-oa-1.svg';
import icon2 from '../../../assets/our_advantages/item-oa-2.svg';
import icon3 from '../../../assets/our_advantages/item-oa-3.svg';
import icon4 from '../../../assets/our_advantages/item-oa-4.svg';

interface OurAdvantagesProps {
	size?: 'small'
}

export const OurAdvantages: React.FC<OurAdvantagesProps> = ({ size }) => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	return <div className={ classNames('bg-white', { 'rounded-2xl mt-5 px-5 py-7': size, 'mt-24 py-24 px-28': !size }) }>
		<Title title={ t('our advantages', true) } className={ size ? 'font-bold' : 'my-5 text-4xl font-bold' } />
		<div className={ classNames('grid', { 'mt-8 grid-cols-1 gap-y-5 text-sm leading-5': size, 'mt-14 grid-cols-2 gap-y-12 text-2xl leading-9': !size }) }>
			<div className='flex items-center'>
				<img className={ classNames({ 'mr-4 w-10 h-10': size, 'mr-6': !size }) } src={icon1} alt=""/>
				{lang === 'ua' ?
					<h4>На шинному ринку з <span className='font-bold'>2008 року</span></h4> :
					<h4>На шинном рынке с <span className='font-bold'>2008 года</span></h4>}
			</div>
			<div className='flex items-center'>
				<img className={ classNames({ 'mr-4 w-10 h-10': size, 'mr-6': !size }) } src={icon2} alt=""/>
				{lang === 'ua' ?
					<h4><span className='font-bold'>Повний</span> цикл обслуговування в Києві (замовлення, доставка, установка, зберігання)</h4> :
					<h4><span className='font-bold'>Полный</span> цикл обслуживания в Киеве (заказ, доставка, установка, хранение)</h4>}
			</div>
			<div className='flex items-center'>
				<img className={ classNames({ 'mr-4 w-10 h-10': size, 'mr-6': !size }) } src={icon3} alt=""/>
				{lang === 'ua' ?
					<h4>Зареєстрована торгова марка <span className='font-bold'>LuxShina TM</span></h4> :
					<h4>Зарегистрированная торговая марка <span className='font-bold'>LuxShina TM</span></h4>}
			</div>
			<div className='flex items-center'>
				<img className={ classNames({ 'mr-4 w-10 h-10': size, 'mr-6': !size }) } src={icon4} alt=""/>
				{lang === 'ua' ?
					<h4>Швидка доставка по Україні <span className='font-bold'>(Нова пошта, Meest)</span></h4> :
					<h4>Быстрая доставка по Украине <span className='font-bold'>(Новая почта, Meest)</span></h4>}
			</div>
		</div>
	</div>
}

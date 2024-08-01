import { useState } from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';

import { ChevronDownIcon, InfoIcon } from '../../Lib/Icons';
import {Rating} from "../../Lib";

const tabs = [
	{ label: 'main characteristics' },
	{ label: 'description' },
	{ label: 'reviews' }
];

export const CharacteristicsBlock = () => {
	const [tab, setTab] = useState('main characteristics');
	const [showOptions, setShowOptions] = useState(false);
	const t = useAppTranslation();

	return <section className='mt-8 md:mt-16'>
		<div className='gap-x-2.5 border-b border-[#E0E4E8] hidden md:flex'>
			{tabs.map((item, index) => {
				return <button
					key={index}
					onClick={ () => setTab(item.label) }
					className={classNames('py-4 px-5 rounded-t text-sm font-bold uppercase focus:outline-none focus:shadow-outline-blue transition-all duration-300', {
						'bg-zinc-200 text-[#575C66]': tab !== item.label,
						'bg-[#171719] text-white': tab === item.label
					})}>
					{t(item.label)}
				</button>
			})}
		</div>
		<div className='relative text-left md:hidden'>
			<button type='button' onClick={() => setShowOptions(prev => !prev)}
							className='flex items-center w-full justify-between px-3.5 py-2 bg-white border border-[#CDD0D9] rounded-sm font-medium'
							id='menu-button'>
				{ t(tab, true) }
				<div className={ classNames('transition-transform', {'rotate-180': showOptions}) }>
					<ChevronDownIcon className='stroke-black'/>
				</div>
			</button>
			<div
				className={classNames('absolute left-0 z-10 w-full border border-[#CDD0D9] bg-white shadow-lg rounded-sm', { hidden: !showOptions })} tabIndex={-1}>
				<div className="text-black px-3.5 py-2">
					{ tabs.map((item, index) => {
						return <button
							key={ index }
							onClick={ () => {
								setTab(item.label);
								setShowOptions(false);
							} }
							className='w-full text-start py-2 font-medium'
						>
							{ t(item.label, true) }
						</button>
					}) }
				</div>
			</div>
		</div>
		{ tab === 'main characteristics' && <div className='flex flex-col md:flex-row my-6 md:my-4 md:gap-10'>
			<div className='flex-1'>
				<div className='flex md:my-4 text-sm font-medium'>
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
				<div className='flex md:my-4 text-sm font-medium'>
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
		</div> }
		{ tab === 'description' && <div className='my-5 md:my-6 leading-7'>
			<p>
				Lorem ipsum dolor sit amet consectetur. Mattis maecenas odio turpis in eu massa adipiscing etiam elementum.
				Risus eu sit euismod amet aliquam. Imperdiet id adipiscing enim maecenas tempor nisi viverra. Malesuada in
				tellus duis ut dictum quam. Facilisi nunc parturient pulvinar a rhoncus nisi sed.
			</p>
			<p className='mt-4'>
				Neque sed dui lorem enim augue sed malesuada. Aliquet egestas est viverra sit eu volutpat. Nec congue imperdiet
				et eget non id facilisis. Blandit pellentesque eu accumsan nunc ornare felis magna eu. Imperdiet id adipiscing
				enim maecenas tempor nisi viverra. Malesuada in tellus duis ut dictum quam. Facilisi nunc parturient pulvinar a
				rhoncus nisi sed.
			</p>
		</div> }
		{ tab === 'reviews' && <div className='my-5 md:my-6 max-w-xl w-full'>
			<div className='bg-white py-4 px-6 shadow-md'>
				<div className='flex justify-between'>
					<div className='flex items-center gap-4'>
						<div className='font-bold text-lg'>Андрій</div>
						<div className='text-xs'>09.02.2024 13:13</div>
					</div>
					<Rating commentsAvgRate={4}/>
				</div>
				<div className='w-10 h-0.5 bg-black'></div>
				<div className='mt-3 text-sm'>
					Відмінні шини, м'які, добре керовані, відмінне гальмування на сухому та мокрому покритті, прослужили 5 років,
					мінятиму на аналогічні, оскільки знос підійшов до контрольного індикатора зносу.
				</div>
			</div>
			<div className='bg-white mt-3 py-4 px-6 shadow-md'>
				<div className='flex justify-between'>
					<div className='flex items-center gap-4'>
						<div className='font-bold text-lg'>Іван</div>
						<div className='text-xs'>31.01.2024 15:37</div>
					</div>
					<Rating commentsAvgRate={5}/>
				</div>
				<div className='w-10 h-0.5 bg-black'></div>
				<div className='mt-3 text-sm'>
					Відмінні шини, тихі, дорогу тримають чудово, ціна прийнятна
				</div>
			</div>
		</div>}
	</section>
}

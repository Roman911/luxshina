import { Carousel } from 'react-responsive-carousel';
import { useAppSelector } from '../../../hooks';

import { PopularItem, Title } from '../../Lib';

import { popularSizes } from './popularSizes.ts';

export const PopularSizes = () => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <div className='mt-28'>
		<Title title={ lang === 'ua' ? 'Популярні розміри легкових шин' : 'Популярные размеры легковых шин' } />
		<div className='lg:grid grid-cols-9 mt-12 gap-x-5 hidden'>
			{popularSizes.map(item => {
				return <div key={ item.size }>
					<div className='text-center text-lg font-bold mb-4'>{ item.size }</div>
					{item.items.map((i, index) => {
						return <PopularItem key={ index } label={ i.label } link={ i.link } />
					})}
				</div>
			})}
		</div>
		<div className='lg:hidden'>
			<Carousel
				showArrows={true}
				autoPlay={true}
				infiniteLoop={true}
				interval={5000}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
			>
				<div className='grid grid-cols-2 gap-x-2.5 mx-1'>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[0].size}</div>
						{popularSizes[0].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[1].size}</div>
						{popularSizes[1].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-2.5 mx-1'>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[2].size}</div>
						{popularSizes[2].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[3].size}</div>
						{popularSizes[3].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-2.5 mx-1'>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[4].size}</div>
						{popularSizes[2].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[5].size}</div>
						{popularSizes[3].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-2.5 mx-1'>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[6].size}</div>
						{popularSizes[2].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[7].size}</div>
						{popularSizes[3].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
				</div>
				<div className='grid grid-cols-2 gap-x-2.5 mx-1'>
					<div>
						<div className='text-center text-lg font-bold mb-4'>{popularSizes[8].size}</div>
						{popularSizes[2].items.map((i, index) => {
							return <PopularItem key={index} label={i.label} link={i.link}/>
						})}
					</div>
				</div>
			</Carousel>
		</div>
	</div>
}

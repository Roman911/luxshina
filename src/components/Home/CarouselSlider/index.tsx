import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

import { useAppTranslation } from '../../../hooks';

const slides = [
	{ id: 0, img: '/images/slide-1.jpg', link: '/catalog/tyre', position: 'left-2/4 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-24' },
	{ id: 1, img: '/images/slide-2.jpg', link: '/catalog/tyre', position: 'left-2/4 -translate-x-1/2 md:translate-x-0 md:left-24' },
	{ id: 2, img: '/images/slide-3.jpg' },
]

export const CarouselSlider = () => {
	const [width, setWidth] = React.useState('desktop');
	const t = useAppTranslation();

	React.useEffect(() => {
		if(window.innerWidth < 768) {
			setWidth('gadget');
		}
	}, [])

	return <div className="mt-16">
		<Carousel
			showArrows={ width === 'gadget' }
			autoPlay={ true }
			infiniteLoop={ true }
			interval={ 5000 }
			showThumbs={ false }
			showStatus={ false }
			showIndicators={ width === 'desktop' }
		>
			{slides.map(item => {
				return <div key={ item.id } className='relative h-[440px] md:h-auto'>
					<img src={item.img} alt='' className='object-cover h-full'/>
					{ item.link && <Link to={ item.link } className={ classNames('btn secondary absolute bottom-6 md:m-0 md:bottom-16 w-10/12 md:w-72', { [`${item.position}`]: item.position }) }>
						{ t('buy here') }
					</Link> }
				</div>
			})}
		</Carousel>
	</div>
}

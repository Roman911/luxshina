import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useAppTranslation } from '../../../hooks';

const slides = [
	{ id: 0, img: '/images/slide-1.jpg', link: '/catalog/tyre', position: 'right-24' },
	{ id: 1, img: '/images/slide-2.jpg', link: '/catalog/tyre', position: 'left-24' },
	{ id: 2, img: '/images/slide-3.jpg' },
]

export const CarouselSlider = () => {
	const t = useAppTranslation();

	return <div className="mt-16">
		<Carousel showArrows={ false } autoPlay={ true } infiniteLoop={ true } interval={ 5000 } showThumbs={ false } showStatus={ false } >
			{slides.map(item => {
				return <div key={ item.id } className='relative'>
					<img src={item.img} alt=''/>
					{ item.link && <Link to={ item.link } className={ classNames('btn secondary absolute bottom-16', { [`${item.position}`]: item.position }) }>
						{ t('buy here') }
					</Link> }
				</div>
			})}
		</Carousel>
	</div>
}

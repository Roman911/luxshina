import { Link } from 'react-router-dom';

import { useAppSelector, useAppTranslation } from '../../../hooks';

import logoFooter from '../../../assets/logo-footer.svg';
import { FacebookIcon, TelegramIcon, ViberIcon } from '../../Lib/Icons';

import { socialSet } from './socialSet.ts';

type IconType = 'telegram' | 'facebook' | 'viber';

export const Footer = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	const icons: Record<IconType, JSX.Element> = {
		telegram: <TelegramIcon className='fill-black group-hover:fill-white' />,
		facebook: <FacebookIcon className='fill-black group-hover:fill-white' />,
		viber: <ViberIcon className='fill-black group-hover:fill-white' />,
	};

	return <footer className='bg-black'>
		<div className='container mx-auto py-16 px-4 grid grid-cols-4'>
			<div>
				<Link to='/'>
					<img src={logoFooter} alt="logo"/>
				</Link>
				<div className='flex gap-x-5 mt-7'>
					{socialSet.map((item, index) => {
						return <Link
							key={index}
							to={item.link}
							className='w-9 h-9 rounded-full bg-white flex items-center justify-center transition group hover:bg-blue-500'
						>
							{ icons[item.icon as IconType] }
						</Link>
					})}
				</div>
				<p className='text-gray-500 mt-7 leading-6 text-sm'>
					© Luxshina.ua 2008-2024.<br/>
					{lang === 'ua' ? 'Всі права захищені.' : 'Все права защищены.'}
				</p>
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold'>{ t('contacts', true) }</h6>
				<h6 className='text-gray-500 text-sm font-bold'>{ t('contacts', true) }</h6>
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold mb-7'>Каталог</h6>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Автошини</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Автодиски</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Диски</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Вантажні шини</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Мотошини</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Акумулятори</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Автотовари</Link>
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold mb-7'>{ t('information', true) }</h6>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Про нас</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Доставка</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Оплата</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Кредит</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Публічна оферта</Link>
				<Link className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to='/' >Контакти</Link>
			</div>
		</div>
	</footer>
}

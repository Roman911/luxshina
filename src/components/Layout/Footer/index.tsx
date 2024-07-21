import { Link } from 'react-router-dom';

import { useAppSelector, useAppTranslation } from '../../../hooks';

import logoFooter from '../../../assets/logo-footer.svg';
import { EmailIcon, FacebookIcon, PhoneIcon, TelegramIcon, ViberIcon } from '../../Lib/Icons';
import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifeLogo from '../../../assets/life-logo.png';
import vodafoneLogo from '../../../assets/vodafone-logo.png';

import { socialSet } from './socialSet.ts';
import { linksCatalog } from './linksCatalog';
import { linksInfo } from './linksInfo.ts';

type IconType = 'telegram' | 'facebook' | 'viber';

export const Footer = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	const icons: Record<IconType, JSX.Element> = {
		telegram: <TelegramIcon className='fill-black group-hover:fill-white' />,
		facebook: <FacebookIcon className='fill-black group-hover:fill-white' />,
		viber: <ViberIcon className='fill-black group-hover:fill-white' />,
	};

	const link = (link: string, title: string, index: number) => {
		return <Link key={ index } className='text-white block text-sm font-medium mt-4 transition hover:text-[#0091E5]' to={ link } >
			{ t(title, true) }
		</Link>
	}

	return <footer className='bg-black'>
		<div className='container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
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
				<h6 className='text-gray-500 text-sm font-bold'>{t('contacts', true)}</h6>
				<div className='flex items-center mt-6'>
					<img src={vodafoneLogo} alt="vodafone-logo"/>
					<span className='ml-2.5 text-sm text-white'>(050) 337 32 05</span>
				</div>
				<div className='flex items-center mt-5'>
					<img src={kievstarLogo} alt="kievstar-logo"/>
					<span className='ml-2.5 text-sm text-white'>(067) 323 44 81</span>
				</div>
				<div className='flex items-center mt-5'>
					<img src={lifeLogo} alt="life-logo"/>
					<span className='ml-2.5 text-sm text-white'>(093) 332 64 71</span>
				</div>
				<div className='flex items-center mt-5'>
					<PhoneIcon className='fill-[#0091E5]'/>
					<span className='ml-2.5 text-sm text-white'>0 800 334 257 ({t('free')})</span>
				</div>
				<div className='flex items-center mt-5'>
					<EmailIcon className='fill-white' />
					<span className='ml-2.5 text-sm text-white'>info@luxshina.ua/ua</span>
				</div>
				<h6 className='mt-8 text-gray-500 text-sm font-bold'>{t('delivery points', true)}</h6>
				<p className='text-white block text-sm font-medium mt-4'>
					{lang === 'ua' ? 'Київ вул. Березняківська, 11' : 'Киев, ул. Березняковская, 11'}
				</p>
				<p className='text-white block text-sm font-medium mt-2'>
					{lang === 'ua' ? 'Чернігів вул. І.Мазепи (Щорса), 53А' : 'Чернигов, ул. И.Мазепы (Щорса), 53А'}
				</p>
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold mb-7'>Каталог</h6>
				{linksCatalog.map((item, index) => {
					return link(item.link, item.title, index)
				})}
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold mb-7'>{t('information', true)}</h6>
				{linksInfo.map((item, index) => {
					return link(item.link, item.title, index)
				})}
			</div>
		</div>
	</footer>
}

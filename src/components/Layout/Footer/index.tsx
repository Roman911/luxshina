import { config } from '../../../config';

import { Link, formatPhoneNumber, formatFreePhoneNumber } from '../../../lib';
import { useAppSelector, useAppTranslation } from '../../../hooks';

import logoFooter from '../../../assets/logo-footer.svg';
import { EmailIcon, FacebookIcon, PhoneIcon, TelegramIcon, ViberIcon } from '../../Lib/Icons';

import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifecellLogo from '../../../assets/life-logo.png';
import vodafoneLogo from '../../../assets/vodafone-logo.png';

import { linksCatalog } from './linksCatalog';
import { linksInfo } from './linksInfo';

import { PhoneLogo } from '../../../models/config';
type IconType = 'telegram' | 'facebook' | 'viber';

const phoneLogos: Record<PhoneLogo, string> = {
	vodafone: vodafoneLogo,
	kievstar: kievstarLogo,
	lifecell: lifecellLogo,
};

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
					{config.social.links.map((item, index) => {
						return <a
							key={index}
							target='_blank'
							href={item.link}
							className='w-9 h-9 rounded-full cursor-pointer bg-white flex items-center justify-center transition group hover:bg-blue-500'
						>
							{ icons[item.logo as IconType] }
						</a>
					})}
				</div>
				<p className='text-gray-500 mt-7 leading-6 text-sm'>
					© {config.domain} {config.startYear}-{new Date().getFullYear()}.<br/>
					{lang === 'ua' ? 'Всі права захищені.' : 'Все права защищены.'}
				</p>
			</div>
			<div>
				<h6 className='text-gray-500 text-sm font-bold'>{t('contacts', true)}</h6>
				{config.contacts.phone.map(item => {
					return <div key={item.value} className='flex items-center mt-5'>
						<img src={phoneLogos[item.logo]} alt={item.logo + '-logo'}/>
						<a href={`tel:${item.value}`} className='ml-2.5 text-sm text-white'>
							{ formatPhoneNumber(item.value) }
						</a>
					</div>
				})}
				<div className='flex items-center mt-5'>
					<PhoneIcon className='fill-[#0091E5]'/>
					<span className='ml-2.5 text-sm text-white'>
						<a href={`tel:${config.contacts.freePhone}`}>
							{formatFreePhoneNumber(config.contacts.freePhone)}
						</a>
						{' '}({t('free')})
					</span>
				</div>
				<div className='flex items-center mt-5'>
					<EmailIcon className='fill-white'/>
					<a href={ `mailto:${config.contacts.email}` } className='ml-2.5 text-sm text-white'>
						{ config.contacts.email }
					</a>
				</div>
				<h6 className='mt-8 text-gray-500 text-sm font-bold'>{t('delivery points', true)}</h6>
				<p className='text-white block text-sm font-medium mt-2 whitespace-pre-wrap leading-8'>
					{ config.contacts.address[lang] }
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

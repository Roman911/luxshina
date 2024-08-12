import { FC } from 'react';

import styles from '../index.module.scss';

import { config } from '../../../config';
import { formatPhoneNumber, formatFreePhoneNumber } from '../../../lib';

import { EmailIcon, PhoneIcon } from '../../Lib/Icons';
import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifecellLogo from '../../../assets/life-logo.png';
import vodafoneLogo from '../../../assets/vodafone-logo.png';

import { PhoneLogo } from '../../../models/config';
import { Language } from '../../../models/language';

const phoneLogos: Record<PhoneLogo, string> = {
	vodafone: vodafoneLogo,
	kievstar: kievstarLogo,
	lifecell: lifecellLogo,
};

interface ContactsProps {
	lang: Language
}

export const Contacts: FC<ContactsProps> = ({ lang }) => {
	return <div className={styles['static-page']}>
		<div className='flex items-center mt-3'>
			<PhoneIcon className='fill-[#0091E5]'/>
			<span className='ml-2.5 font-bold'>
				<a href={`tel:${config.contacts.freePhone}`}>
					{formatFreePhoneNumber(config.contacts.freePhone)}
				</a>
			</span>
		</div>
		{config.contacts.phone.map(item => {
			return <div key={item.value} className='flex items-center'>
				<img src={phoneLogos[item.logo]} alt={item.logo + '-logo'}/>
				<a href={`tel:${item.value}`} className='ml-2.5 font-bold'>
					{formatPhoneNumber(item.value)}
				</a>
			</div>
		})}
		<h4>{ lang === Language.UA ? 'Графік роботи кол-центра' : 'График работы кол-центра' }:</h4>
		<div className='whitespace-pre-wrap leading-8'>
			{ config.contacts.workSchedule[lang] }
		</div>
		<h4>{ lang === Language.UA ? 'Електрона пошта' : 'Електронная почта' }:</h4>
		<div className='flex items-center mt-5'>
			<EmailIcon className='fill-black'/>
			<a href={`mailto:${config.contacts.email}`} className='ml-2.5 font-bold'>
				{config.contacts.email}
			</a>
		</div>
		<h4>{ lang === Language.UA ? 'Пункти видачі' : 'Пункти видачі' }:</h4>
		<div className='whitespace-pre-wrap leading-8'>
			{ config.contacts.address[lang] }
		</div>
	</div>
}

import { FC, useRef, useState, type MouseEvent } from 'react';

import { useClickOutside, useAppSelector } from '../../hooks';
import { ContactsComponent } from '../../components/Contacts';
import { useAppTranslation } from '../../hooks';

interface ContactsProps {
	className?: string
}

export const Contacts: FC<ContactsProps> = ({className}) => {
	const [ showOptions, setShowOptions ] = useState<boolean>(false);
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);
	const tooltipRef = useRef<HTMLDivElement>(null);
	const t = useAppTranslation();

	const closeOptions = () => {
		setShowOptions(false);
	}

	useClickOutside({ref: tooltipRef, open: showOptions, onClose: closeOptions});

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setShowOptions(prev => !prev);
	}

	const telephoneFree = {
		phone: settings[lang].config_telephone_besk,
		url: settings[lang].config_telephone_besk_url,
	}

	const telephones: { phone: string; url: string; logo: "vodafone" | "kievstar" | "lifecell"; }[] = [
		{ phone: settings[lang].config_telephone_vodafone, url: settings[lang].config_telephone_vodafone_url, logo: 'vodafone' },
		{ phone: settings[lang].config_telephone_kievstar, url: settings[lang].config_telephone_kievstar_url, logo: 'kievstar' },
		{ phone: settings[lang].config_telephone_life, url: settings[lang].config_telephone_life_url, logo: 'lifecell' },
	];

	return <ContactsComponent
		className={ className }
		showOptions={ showOptions }
		handleClick={ handleClick }
		text={ t('free') }
		tooltipRef={ tooltipRef }
		telephoneFree={ telephoneFree }
		telephones={ telephones }
	/>
};

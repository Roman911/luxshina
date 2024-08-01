import { FC } from 'react';

import { TopLine } from './TopLine';
import { HeaderCenter } from './HeaderCenter';
import { HeaderBottom } from './HeaderBottom';

interface HeaderProps {
	lang: string
	changedAppLang: (lang: string) => void
}

export const HeaderComponents: FC<HeaderProps> = ({ lang, changedAppLang }) => {
	return <header>
		<TopLine lang={ lang } changedAppLang={ changedAppLang } />
		<HeaderCenter />
		<HeaderBottom />
	</header>
}
import { FC } from 'react';
import classNames from 'classnames';

import { Link } from '../../../lib';
import { useAppTranslation } from '../../../hooks';

import { BusIcon, CargoIcon, CarIcon, MotorcyclesIcon, SpecialEquipmentIcon, SuvIcon } from '../Icons';

import { typeCatLinks } from './links';
import type { LinkComponentProps } from '../../../models/linkComponent';

interface TypeCarLinksProps {
	section: 'header' | 'catalog'
	onClick?: () => void
}

const Icons = {
	light: CarIcon,
	bus: BusIcon,
	cargo: CargoIcon,
	motorcycle: MotorcyclesIcon,
	special: SpecialEquipmentIcon,
	suv: SuvIcon,
};

interface ILinkComponent extends LinkComponentProps {
	section: 'header' | 'catalog'
	icon: keyof typeof Icons
	iconStyles?: string
}

const LinkComponent: FC<ILinkComponent> = ({ section, to, icon, label, onClick, iconStyles }) => {
	const IconComponent = Icons[icon];

	return <Link
		to={to}
		onClick={onClick}
		className={classNames('flex items-center group',
			{'flex-col': section === 'catalog', 'mt-3 gap-2.5': section === 'header'}
		)}
	>
		<IconComponent className={classNames('transition fill-gray-500 group-hover:fill-blue-500', iconStyles)}/>
		<span className={classNames('transition group-hover:text-blue-500',
			{'text-sm text-gray-500 font-bold': section === 'catalog', 'group-hover:underline': section === 'header'}
		)}>
			{ label }
		</span>
	</Link>
}

export const TypeCarLinks: FC<TypeCarLinksProps> = ({ onClick, section }) => {
	const t = useAppTranslation();

	return <>
		{typeCatLinks.map(item => {
			return <LinkComponent
				key={ item.label }
				section={ section }
				to={ item.to }
				icon={ item.icon as keyof typeof Icons }
				label={ t(item.label, true) }
				onClick={ onClick }
				iconStyles={ item.iconStyles }
			/>
		})}
	</>
}

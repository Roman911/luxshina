import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";
import { CarFilterIcon, DiskIcon, TyreIcon } from "../../../Lib/Icons";

interface TabProps {
	children: React.ReactNode
	name: 'tyre' | 'disk' | 'car'
	section: 'tyre' | 'disk' | 'car'
	isOpen: boolean
	handleClick: (value: 'tyre' | 'disk' | 'car') => void
	label: string
}

const icons = {
	tyre: TyreIcon,
	disk: DiskIcon,
	car: CarFilterIcon
};

export const Tab: React.FC<TabProps> = ({ children, name, section, isOpen, handleClick, label }) => {
	const Icon = icons[name];

	const iconClassNames = classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', {
		'fill-[#99CFFF]': section !== name || !isOpen,
		'fill-white': section === name && isOpen,
		'stroke-[#99CFFF]': name === 'car' && (section !== name || !isOpen),
		'stroke-white': name === 'car' && (section === name && isOpen)
	});

	const tabClassNames = classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl', {
		'bg-blue-400': section !== name || !isOpen,
		'bg-[#005299]': section === name && isOpen,
		'mt-2.5 md:mt-0': name !== 'tyre'
	});

	const buttonClassNames = classNames(styles.link, 'text-base xl:text-xl font-bold md:mr-1.5 xl:mr-2.5 p-5 md:p-0 w-full md:w-auto relative', {
		'md:pointer-events-none': section === name && isOpen,
		'text-white': section === name && isOpen, 'md:text-white': section === name
	});

	const contentClassNames = classNames('md:hidden px-5 pb-7', {
		'hidden': section !== name || !isOpen,
		'block': section === name && isOpen
	});

	return (
		<div className={ tabClassNames }>
			<button onClick={ () => handleClick(name) } className={ buttonClassNames }>
				<Icon className={ iconClassNames } />
				{ label }
			</button>
			<div className={ contentClassNames }>
				{ children }
			</div>
		</div>
	);
}

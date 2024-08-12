import { useEffect, useRef, useState, SetStateAction } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

import { useAppTranslation } from '../../../../hooks';
import { Link } from '../../../../lib';
import { CarDiskFilter } from './CarDiskFilter';
import { CarTireFilter } from './CarTireFilter';
import { ChevronDownIcon } from '../../../Lib/Icons';

export const HeaderBottom = () => {
	const [ open, setOpen ] = useState( false );
	const filterRef = useRef<HTMLDivElement>(null);
	const tiresRef = useRef<HTMLButtonElement>(null);
	const disksRef = useRef<HTMLButtonElement>(null);
	const [ section, setSection ] = useState( 'tires' );
	const t = useAppTranslation();

	const handleClick = (value: SetStateAction<string>) => {
		setOpen(!(open && section === value));
		if (section !== value) {
			setSection(value);
		}
	};

	const closeFilter = () => {
		setOpen(false);
	}

	const handleClickOutside = (e: MouseEvent) => {
		const target = e.target as Node;
		if (
			(tiresRef.current && tiresRef.current.contains(target)) ||
			(disksRef.current && disksRef.current.contains(target))
		) {
			return;
		}
		if (filterRef.current && !filterRef.current.contains(target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		if(!open) return;

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [open]);

	return <div className='bg-white hidden lg:block'>
		<nav className='container mx-auto max-w-7xl flex justify-between items-center gap-8 p-5 relative'>
			<button ref={ tiresRef } onClick={() => handleClick('tires')} type="button"
							className={classNames('inline-flex items-center gap-x-1.5 font-bold uppercase group transition hover:text-blue-500', {'text-blue-500': open && section === 'tires'})}>
				<span>{t('cartires')}</span>
				<span className={classNames('transition', {'rotate-180': open && section === 'tires'})}>
					<ChevronDownIcon
						className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': open && section === 'tires'})}/>
				</span>
			</button>
			<button ref={ disksRef } onClick={() => handleClick('disks')} type="button"
							className={classNames('inline-flex items-center gap-x-1.5 font-bold uppercase group transition hover:text-blue-500', {'text-blue-500': open && section === 'disks'})}>
				<span>Автодиски</span>
				<span className={classNames('transition', {'rotate-180': open && section === 'disks'})}>
					<ChevronDownIcon
						className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': open && section === 'disks'})}/>
				</span>
			</button>
			<Link className={styles.link} to='/'>Вантажні шини</Link>
			<Link className={styles.link} to='/'>Мотошини</Link>
			<Link className={styles.link} to='/'>Акумулятори</Link>
			<Link className={styles.link} to='/'>Автотовари</Link>
			<Link className={styles.link} to='/tyre-disk-size-calc'>Шинний калькулятор</Link>
			<div
				ref={ filterRef }
				className={classNames('absolute left-1/2 top-16 z-20 flex w-full -translate-x-1/2 px-4', {'hidden': !open})}>
				<div
					className="w-full flex-auto overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 py-8 px-12 grid grid-cols-4">
					{section === 'tires' ? <CarTireFilter closeFilter={ closeFilter } /> : <CarDiskFilter closeFilter={ closeFilter } />}
				</div>
			</div>
		</nav>
	</div>
}

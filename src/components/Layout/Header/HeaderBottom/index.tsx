import { useRef, useState, type MouseEvent, type SetStateAction } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

import { useAppDispatch, useAppTranslation, useClickOutside } from '../../../../hooks';
import { resetFilter } from '../../../../store/reducers/filterSlice';
import { Link } from '../../../../lib';
import { CarDiskFilter } from './CarDiskFilter';
import { CarTireFilter } from './CarTireFilter';
import { ChevronDownIcon } from '../../../Lib/Icons';
import { links } from '../links';

export const HeaderBottom = () => {
	const [ open, setOpen ] = useState( false );
	const filterRef = useRef<HTMLDivElement>(null);
	const [ section, setSection ] = useState( 'tires' );
	const dispatch = useAppDispatch();
	const t = useAppTranslation();

	const closeFilter = () => {
		setOpen(false);
	}

	useClickOutside({ ref: filterRef, open, onClose: closeFilter });

	const handleClick = (event: MouseEvent<HTMLButtonElement>, value: SetStateAction<string>) => {
		event.stopPropagation();
		setOpen(!(open && section === value));
		if (section !== value) {
			setSection(value);
		}
	};

	return <div className='bg-white hidden lg:block'>
		<nav className='container mx-auto max-w-7xl flex justify-between items-center gap-8 p-5 relative'>
			<button onClick={event => handleClick(event, 'tires')} type="button"
							className={classNames('inline-flex items-center gap-x-1.5 font-bold uppercase group transition hover:text-blue-500 outline-none', {'text-blue-500': open && section === 'tires'})}>
				<span>{t('cartires')}</span>
				<span className={classNames('transition', {'rotate-180': open && section === 'tires'})}>
					<ChevronDownIcon
						className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': open && section === 'tires'})}/>
				</span>
			</button>
			<button onClick={event => handleClick(event, 'disks')} type="button"
							className={classNames('inline-flex items-center gap-x-1.5 font-bold uppercase group transition hover:text-blue-500 outline-none', {'text-blue-500': open && section === 'disks'})}>
				<span>Автодиски</span>
				<span className={classNames('transition', {'rotate-180': open && section === 'disks'})}>
					<ChevronDownIcon
						className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': open && section === 'disks'})}/>
				</span>
			</button>
			{links.map((item, index) => {
				return <Link key={ index } onClick={ () => dispatch(resetFilter()) } className={ styles.link } to={ item.url }>
					{ t(item.title) }
				</Link>
			})}
			<div
				ref={ filterRef }
				className={classNames('absolute left-1/2 top-16 z-30 flex w-full -translate-x-1/2 px-4', {'hidden': !open})}>
				<div
					className="w-full flex-auto overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 py-8 px-12 grid grid-cols-4">
					{section === 'tires' ? <CarTireFilter closeFilter={ closeFilter } /> : <CarDiskFilter closeFilter={ closeFilter } />}
				</div>
			</div>
		</nav>
	</div>
}

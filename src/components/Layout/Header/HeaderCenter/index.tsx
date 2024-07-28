import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

import { useAppSelector, useAppTranslation } from '../../../../hooks';
import { Link } from '../../../Links';
import { Contacts } from '../Contacts';

import logo from '../../../../assets/logo.svg';
import { CartIcon, ChevronDownIcon, CloseMenuIcon, HeartIcon, LibraIcon, MenuIcon, SearchIcon } from '../../../Lib/Icons';
import { CarTireFilter } from "../HeaderBottom/CarTireFilter";
import { CarDiskFilter } from "../HeaderBottom/CarDiskFilter";

export const HeaderCenter = () => {
	const [ filterIsOpen, setFilterOpen ] = React.useState<boolean | string>(false);
	const [ openMenu, setOpenMenu ] = React.useState(false);

	const t = useAppTranslation();
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer);
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);

	const handleClick = (value: React.SetStateAction<boolean | string>) => {
		if (filterIsOpen !== value) {
			setFilterOpen(value);
		} else {
			setFilterOpen(false);
		}
	};

	return <div className={classNames('bg-white border-b relative', styles['header-center'])}>
		<div
			className={classNames('container mx-auto grid items-center py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_320px_150px]', styles.container)}>
			<Link to='/' className='logo w-40 lg:w-auto'>
				<img src={logo} className="logo" alt="logo"/>
			</Link>
			<div
				className={classNames('flex rounded-full mx-auto bg-white p-0.5 mt-4 lg:mt-0 border border-gray-300 w-full lg:max-w-[600px]', styles.search)}>
				<input
					type="text"
					className="w-full flex bg-transparent pl-4 text-[15px] text-gray-500 font-medium outline-0"
					placeholder="235/65R17"
				/>
				<button type="submit" className="btn primary w-14 h-9">
					<SearchIcon className='fill-white' />
				</button>
			</div>
			<Contacts className='hidden lg:inline-block' />
			<div className={classNames('flex gap-7 justify-end', styles.menu)}>
				<Link to='/comparison' className='relative'>
					<div className="-top-2.5 absolute left-3.5">
						<p
							className={classNames(
								'flex h-5 w-5 p-2 items-center justify-center rounded-full text-[11px] border-2 border-white font-bold text-white',
								{'bg-natural-400': comparisonItems.length === 0},
								{'bg-blue-500': comparisonItems.length > 0},
							)}>
							{comparisonItems.length}
						</p>
					</div>
					<LibraIcon/>
				</Link>
				<Link to='/bookmarks' className='relative'>
					<div className="-top-2.5 absolute left-3.5">
						<p
							className={classNames(
								'flex h-5 w-5 p-2 items-center justify-center rounded-full text-[11px] border-2 border-white font-bold text-white',
								{ 'bg-natural-400': bookmarksItems.length === 0 },
								{ 'bg-blue-500': bookmarksItems.length > 0 },
							)}>
							{ bookmarksItems.length }
						</p>
					</div>
					<HeartIcon/>
				</Link>
				<Link to='/cart' className='relative'>
					<div className="-top-2.5 absolute left-3.5">
						<p
							className="flex h-5 w-5 p-2 items-center justify-center rounded-full bg-blue-500 text-[11px] border-2 border-white font-bold text-white">3</p>
					</div>
					<CartIcon/>
				</Link>
				<button onClick={() => setOpenMenu(prev => !prev)} className='lg:hidden'>
					{ openMenu ? <CloseMenuIcon className='fill-[#142033]' /> : <MenuIcon className='fill-[#142033]'/> }
				</button>
			</div>
		</div>
		<div className={ classNames('absolute top-14 bg-white w-full divide-y divide-[#E6E9EB] border-t border-[#E6E9EB] z-10 lg:hidden', { 'hidden': !openMenu }) }>
			<div className='py-5'>
				<button onClick={() => handleClick('tires')}
								className={classNames('px-7 w-full flex items-center justify-between uppercase font-bold group transition hover:text-blue-500', {'text-blue-500': filterIsOpen === 'tires'})}>
					<span>{t('cartires')}</span>
					<span className={classNames('transition', {'rotate-180': filterIsOpen === 'tires'})}>
						<ChevronDownIcon
							className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': filterIsOpen === 'tires'})}/>
					</span>
				</button>
				{ filterIsOpen === 'tires' &&
					<div className='mt-5 px-7 py-5 border-t border-[#E6E9EB] bg-[#FAFAFC] grid grid-cols-2'>
						<CarTireFilter/>
					</div>
				}
				</div>
					<div className='py-5'>
					<button onClick={() => handleClick('disks')}
				className={classNames('px-7 w-full flex items-center justify-between uppercase font-bold group transition hover:text-blue-500', {'text-blue-500': filterIsOpen === 'disks'})}>
					<span>Автодиски</span>
					<span className={classNames('transition', {'rotate-180': filterIsOpen === 'disks'})}>
						<ChevronDownIcon
							className={classNames('stroke-black transition group-hover:stroke-blue-500', {'stroke-blue-500': filterIsOpen === 'disks'})}/>
					</span>
				</button>
				{ filterIsOpen === 'disks' &&
					<div className='mt-5 px-7 py-5 border-t border-[#E6E9EB] bg-[#FAFAFC] grid grid-cols-2'>
						<CarDiskFilter/>
					</div>
				}
			</div>
			<Link className='py-5 px-7 block uppercase font-bold' to='/'>Вантажні шини</Link>
			<Link className='py-5 px-7 block uppercase font-bold' to='/'>Мотошини</Link>
			<Link className='py-5 px-7 block uppercase font-bold' to='/'>Акумулятори</Link>
			<Link className='py-5 px-7 block uppercase font-bold' to='/'>Автотовари</Link>
			<Link className='py-5 px-7 block uppercase font-bold' to='/tyre-disk-size-calc'>Шинний калькулятор</Link>
		</div>
	</div>
}

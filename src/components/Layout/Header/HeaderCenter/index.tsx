import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.scss';

import { useAppSelector, useAppTranslation } from '../../../../hooks';

import logo from '../../../../assets/logo.svg';
import { CartIcon, ChevronDownIcon, HeartIcon, LibraIcon, MenuIcon, PhoneIcon, SearchIcon } from '../../../Lib/Icons';

import kievstarLogo from '../../../../assets/kievstar-logo.png';
import lifeLogo from '../../../../assets/life-logo.png';
import vodafoneLogo from '../../../../assets/vodafone-logo.png';

export const HeaderCenter = () => {
	const [ showOptions, setShowOptions ] = React.useState(false);
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer);
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);
	const t = useAppTranslation();

	return <div className={classNames('bg-white border-b', styles['header-center'])}>
		<div className={classNames('container mx-auto grid items-center py-3 px-4 grid-cols-2 lg:grid-cols-[220px_auto_320px_150px]', styles.container)}>
			<Link to='/' className='logo w-40 lg:w-auto'>
				<img src={logo} className="logo" alt="logo"/>
			</Link>
			<div className={classNames('flex rounded-full mx-auto bg-white p-0.5 mt-4 lg:mt-0 border border-gray-300 w-full lg:max-w-[600px]', styles.search)}>
				<input
					type="text"
					className="w-full flex bg-transparent pl-4 text-[15px] text-gray-500 font-medium outline-0"
					placeholder="235/65R17"
				/>
				<button type="submit" className="btn primary w-14 h-9">
					<SearchIcon className='fill-white' />
				</button>
			</div>
			<div className='relative hidden lg:inline-block text-left'>
				<button type="button" onClick={() => setShowOptions(prev => !prev)}
								className="flex items-center w-full justify-center gap-x-1.5 bg-white text-sm"
								id="menu-button" aria-expanded="true" aria-haspopup="true">
					<PhoneIcon className='fill-blue-500' />
					<div className='font-bold'>0 800 334 XXX</div>
					<div>({ t('free') })</div>
					<div className={ classNames('transition-transform', { 'rotate-180': showOptions }) }>
						<ChevronDownIcon />
					</div>
				</button>
				<div
					className={classNames('absolute right-0 z-10 mt-2 w-48 origin-top-right border border-gray-200 bg-white shadow-lg p-5 rounded-sm', { hidden: !showOptions })}
					role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
					<div className="py-1" role="none">
						<div className='flex items-center'>
							<img src={vodafoneLogo} alt="vodafone-logo"/>
							<span className='ml-2.5 font-medium'>
								(050) 337 32 05
							</span>
						</div>
						<div className='flex items-center mt-3'>
							<img src={kievstarLogo} alt="kievstar-logo"/>
							<span className='ml-2.5 font-medium'>
								(067) 323 44 81
							</span>
						</div>
						<div className='flex items-center mt-3'>
							<img src={lifeLogo} alt="life-logo"/>
							<span className='ml-2.5 font-medium'>
								(093) 332 64 71
							</span>
						</div>
					</div>
				</div>
			</div>
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
								{'bg-natural-400': bookmarksItems.length === 0 },
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
				<button className='lg:hidden'>
					<MenuIcon className='fill-[#142033]' />
				</button>
			</div>
		</div>
	</div>
}

import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.scss';

import { useAppSelector } from '../../../../hooks';
import { Contacts } from '../Contacts';

import logo from '../../../../assets/logo.svg';
import { CartIcon, HeartIcon, LibraIcon, MenuIcon, SearchIcon } from '../../../Lib/Icons';

export const HeaderCenter = () => {
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer);
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);

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

import { FC } from 'react';
import classNames from 'classnames';

import styles from '../HeaderCenter/index.module.scss';
import { SearchIcon } from '../../../Lib/Icons';

interface SearchProps {
	placeholder: string
}

export const SearchComponent: FC<SearchProps> = ({ placeholder }) => {
	return <div
		className={classNames('flex rounded-full mx-auto bg-white p-0.5 mt-4 lg:mt-0 border border-gray-300 w-full lg:max-w-[600px]', styles.search)}>
		<input
			type="text"
			className="w-full flex bg-transparent pl-4 text-[15px] text-gray-500 font-medium outline-0"
			placeholder={ placeholder }
		/>
		<button type="submit" className="btn primary w-14 h-9">
			<SearchIcon className='fill-white'/>
		</button>
	</div>
}

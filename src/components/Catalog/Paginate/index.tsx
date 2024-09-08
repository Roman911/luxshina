import { FC, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import './index.scss';

const itemsPerPage = 12;

interface PaginateProps {
	total_count: number | undefined
}

export const Paginate: FC<PaginateProps> = ({ total_count = 0 }) => {
	const [ itemOffset, setItemOffset ] = useState(0);
	const [ pageRangeDisplayed, setPageRangeDisplayed ] = useState(3);

	useEffect(() => {
		if(window.innerWidth < 768) {
			setPageRangeDisplayed(1);
		}
	}, [])

	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const pageCount = Math.ceil(total_count / itemsPerPage);

	const handlePageClick = (event: { selected: number; }) => {
		const newOffset = (event.selected * itemsPerPage) % total_count;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return <ReactPaginate
		className='paginate'
		breakLabel='...'
		nextLabel='>'
		onPageChange={ handlePageClick }
		pageRangeDisplayed={ pageRangeDisplayed }
		marginPagesDisplayed={ 2 }
		pageCount={ pageCount }
		previousLabel='<'
		renderOnZeroPageCount={ null }
	/>
}

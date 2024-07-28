import React from 'react';
import ReactPaginate from 'react-paginate';

import './index.scss';

const items = [...Array(133).keys()];
const itemsPerPage = 4;

export const Paginate = () => {
	const [ itemOffset, setItemOffset ] = React.useState(0);
	const [ pageRangeDisplayed, setPageRangeDisplayed ] = React.useState(3);

	React.useEffect(() => {
		if(window.innerWidth < 768) {
			setPageRangeDisplayed(1);
		}
	}, [])

	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event: { selected: number; }) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
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

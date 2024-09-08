import { FC } from 'react';

import { addBookmarks, removeBookmarks } from '../../../store/reducers/bookmarksSlice';
import { addComparison, removeComparison } from '../../../store/reducers/comparisonSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import type { Product } from '../../../models/products';
import { ProductCardComponent } from '../../../components/ProductCard'

interface ProductCardProps {
	item: Product
}

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
	const { bookmarksItems } = useAppSelector(state => state.bookmarksReducer);
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);
	const dispatch = useAppDispatch();

	const isBookmarks = bookmarksItems.length > 0 && bookmarksItems.includes(item.group);
	const isComparison = comparisonItems.length > 0 && comparisonItems.includes(item.group);

	const addToBookmarks = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
		event.preventDefault();
		dispatch(isBookmarks ? removeBookmarks(id) : addBookmarks(id));
	};

	const addToComparison = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
		event.preventDefault();
		dispatch(isComparison ? removeComparison(id) : addComparison(id));
	};

	return <ProductCardComponent
		item={ item }
		addToDefense={ addToBookmarks }
		isBookmarks={ isBookmarks }
		isComparison={ isComparison }
		addToComparison={ addToComparison }
	/>
}

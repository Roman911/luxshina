import React from 'react';

import { addDefense } from '../../../store/reducers/defenseSlice';
import { useAppDispatch } from '../../../hooks';

import type { itemProps } from "../../../models/productCard";
import { ProductCardComponent } from '../../../components/ProductCard'

interface ProductCardProps {
	item: itemProps
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
	const dispatch = useAppDispatch();

	const addToDefense = (event: React.MouseEvent<HTMLButtonElement>, id: number): void => {
		event.preventDefault();
		dispatch(addDefense(id));
	}

	return <ProductCardComponent item={ item } addToDefense={ addToDefense } />
}

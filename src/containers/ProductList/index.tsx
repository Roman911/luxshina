import React from 'react';

import { ProductCard } from './ProductCard';
import type { Data } from '../../models/products';

interface ProductListProps {
	classnames?: string
	data: Data | undefined
}

export const ProductList: React.FC<ProductListProps> = ({ classnames = 'grid-cols-3', data }) => {
	const products = data?.products.map(item => {
		return <ProductCard key={ item.group } item={ item } />
	})

	return (
		<div className={`grid gap-1.5 ${classnames}`}>
			{products}
		</div>
	)
};

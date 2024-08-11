import React from 'react';

import { ProductCard } from './ProductCard';
import { itemProps } from "../../models/productCard.ts";

interface ProductListProps {
	noDataText?: string
	classnames?: string
	data: {
		count: number
		is_had_items: boolean
		data: itemProps[]
	}
}

export const ProductList: React.FC<ProductListProps> = ({ noDataText, classnames = 'grid-cols-3', data }) => {
	const products = data.data.map(item => {
		return <ProductCard key={ item.group } item={ item } />
	})

	if (data.data.length === 0) {
		return noDataText ? (
			<div className="py-5 px-5 text-center bg-blue-100 w-full mt-4 text-lg font-medium">
				{noDataText}
			</div>
		) : null;
	}

	return <div className={`grid gap-1.5 ${classnames}`}>
		{products}
	</div>
}

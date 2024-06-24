import React from 'react';
import { ProductCard } from './ProductCard';
import { itemProps } from "../../module/productCard.ts";

interface ProductListProps {
	classnames?: string
	data: {
		count: number
		is_had_items: boolean
		data: itemProps[]
	}
}

export const ProductList: React.FC<ProductListProps> = ({ classnames = 'grid-cols-3', data }) => {
	const products = data.data.map(item => {
		return <ProductCard key={ item.group } item={ item } />
	})

	return <div className={ `grid gap-1.5 ${classnames}` }>
		{ products }
	</div>
}

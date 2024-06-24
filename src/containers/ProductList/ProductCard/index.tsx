import React from 'react';

import type { itemProps } from "../../../module/productCard";
import { ProductCardComponent } from '../../../components/ProductCard'

interface ProductCardProps {
	item: itemProps
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
	return <ProductCardComponent item={ item } />
}

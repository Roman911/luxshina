import React from 'react';

import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { CartComponent } from '../../components/Cart';

const data = [
	{
		"full_name": "Premiorri Solazo 175/70 R13 82H",
		"default_photo": 22399,
		"group": 258895,
		"min_price": 1182,
		"max_price": 1182,
		"season": 1,
		"vehicle_type": 1,
		"popularity": "208",
		"model": 3887,
		"studded": false,
		"comments_count": 2,
		"comments_avg_rate": 4,
		"diameter": 13,
		"best_offer": {
			"id": 464200017,
			"price": 1182,
			"city": 1739,
			"year": 2024,
			"country": 220
		},
		"labels": [
			2
		]
	},
	{
		"full_name": "Premiorri Solazo S Plus 195/65 R15 95V XL",
		"default_photo": 4776,
		"group": 341679,
		"min_price": 1487,
		"max_price": 1487,
		"season": 1,
		"vehicle_type": 1,
		"popularity": "197",
		"model": 5558,
		"studded": false,
		"comments_count": 3,
		"comments_avg_rate": 4,
		"diameter": 15,
		"best_offer": {
			"id": 463172054,
			"price": 1487,
			"city": 1739,
			"year": 2024,
			"country": 220
		},
		"labels": [
			2
		]
	},
	{
		"full_name": "Michelin Primacy 4+ 205/55 R16 91V",
		"default_photo": 37813,
		"group": 392846,
		"min_price": 3198,
		"max_price": 3498,
		"season": 1,
		"vehicle_type": 1,
		"popularity": "195",
		"model": 12116,
		"studded": false,
		"comments_count": 3,
		"comments_avg_rate": 5,
		"diameter": 16,
		"best_offer": {
			"id": 464996186,
			"price": 3472,
			"city": 901,
			"year": 2023,
			"country": 87
		},
		"labels": [
			2
		]
	},
	{
		"full_name": "Premiorri Solazo 215/65 R16 98H",
		"default_photo": 22399,
		"group": 265378,
		"min_price": 1802,
		"max_price": 1897,
		"season": 1,
		"vehicle_type": 1,
		"popularity": "193",
		"model": 3887,
		"studded": false,
		"comments_count": 2,
		"comments_avg_rate": 4,
		"diameter": 16,
		"best_offer": {
			"id": 464200119,
			"price": 1897,
			"city": 1739,
			"year": 2024,
			"country": 220
		},
		"labels": [
			2
		]
	},
]

interface CartProps {

}

export const Cart: React.FC<CartProps> = () => {
	return <LayoutWrapper>
		<Breadcrumbs />
		<Title title='cart' />
		<CartComponent data={ data } />
	</LayoutWrapper>
}

import { LayoutWrapper } from '../../components/Layout';
import { Filter } from './Filter';
import { ProductList } from '../ProductList';
import { CarouselSlider, OurAdvantages, PopularBrands, PopularSizes, TextSeo } from '../../components/Home';
import { Title } from '../../components/Lib';

const data = {
	"count": 35047,
	"is_had_items": true,
	"data": [
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
		{
			"full_name": "Tigar High Performance 205/55 R16 94V XL",
			"default_photo": 24760,
			"group": 314121,
			"min_price": 1883,
			"max_price": 2081,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "193",
			"model": 6416,
			"studded": false,
			"comments_count": 4,
			"comments_avg_rate": 4.5,
			"diameter": 16,
			"best_offer": {
				"id": 465103058,
				"price": 1883,
				"city": 901,
				"year": 2021,
				"country": 193
			},
			"labels": [
				2
			]
		},
		{
			"full_name": "Laufenn S Fit EQ LK01 205/55 R16 94V XL FR",
			"default_photo": 30962,
			"group": 279429,
			"min_price": 2128,
			"max_price": 2128,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "192",
			"model": 2695,
			"studded": false,
			"comments_count": 5,
			"comments_avg_rate": 4.8,
			"diameter": 16,
			"best_offer": {
				"id": 465351690,
				"price": 2128,
				"city": 189,
				"year": 2024,
				"country": 42
			},
			"labels": [
				2
			]
		},
		{
			"full_name": "Hankook Ventus Prime 3 K125 205/60 R16 96H XL",
			"default_photo": 24576,
			"group": 323233,
			"min_price": 3339,
			"max_price": 3380,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "180",
			"model": 2195,
			"studded": false,
			"comments_count": 3,
			"comments_avg_rate": 4.6667,
			"diameter": 16,
			"best_offer": {
				"id": 465173934,
				"price": 3339,
				"city": 2235,
				"year": 2022,
				"country": 42
			},
			"labels": [
				2
			]
		},
		{
			"full_name": "Premiorri Solazo 185/65 R14 86H",
			"default_photo": 22399,
			"group": 265627,
			"min_price": 1166,
			"max_price": 1311,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "157",
			"model": 3887,
			"studded": false,
			"comments_count": 2,
			"comments_avg_rate": 4,
			"diameter": 14,
			"best_offer": {
				"id": 464200039,
				"price": 1311,
				"city": 1739,
				"year": 2024,
				"country": 220
			},
			"labels": [
				2
			]
		},
		{
			"full_name": "Premiorri Solazo 195/65 R15 91H",
			"default_photo": 22399,
			"group": 259416,
			"min_price": 1452,
			"max_price": 1452,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "152",
			"model": 3887,
			"studded": false,
			"comments_count": 2,
			"comments_avg_rate": 4,
			"diameter": 15,
			"best_offer": {
				"id": 463172047,
				"price": 1452,
				"city": 1739,
				"year": 2024,
				"country": 220
			},
			"labels": [
				2
			]
		},
		{
			"full_name": "Premiorri Solazo 205/60 R16 92V",
			"default_photo": 22399,
			"group": 259984,
			"min_price": 1663,
			"max_price": 1663,
			"season": 1,
			"vehicle_type": 1,
			"popularity": "143",
			"model": 3887,
			"studded": false,
			"comments_count": 2,
			"comments_avg_rate": 4,
			"diameter": 16,
			"best_offer": {
				"id": 463172049,
				"price": 1663,
				"city": 1739,
				"year": 2024,
				"country": 220
			},
			"labels": [
				2
			]
		},
	]
}

export const Home = () => {
	return <main>
		<Filter />
		<LayoutWrapper homePage={ true }>
			<Title title='ТОП 10 популярних літніх шин 2024 року' />
			<ProductList classnames='grid-cols-5' data={ data } />
			<CarouselSlider />
			<OurAdvantages />
			<PopularSizes />
			<PopularBrands />
			<TextSeo />
		</LayoutWrapper>
	</main>
}
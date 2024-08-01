import { useState } from 'react';

import { useAppTranslation } from '../../hooks';

import { ProductList } from '../ProductList';
import Modal from '../Modals';
import { QuickOrder } from '../Modals/QuickOrder';
import { OnlineInstallment } from '../../components/Modals';

import { LayoutWrapper } from '../../components/Layout';
import { ProductComponent } from '../../components/Product';
import { TextSeo } from '../../components/Home';
import { Title } from '../../components/Lib';
import { Breadcrumbs } from '../../components/Breadcrumbs';

const data = {
	brand: {id: 1514, name: "Michelin"},
	comments: {rate: 5, count: 3},
	disabled: false,
	full_name: "Michelin Primacy 4+ 205/55 R16 91V",
	id: 392846,
	labels: [2],
	max_price: 3472,
	meta_data: {
		description_ru: null,
		description_ua: null,
		h1_ru: null,
		h1_ua: null,
		id: 0,
		page: null,
		title_ru: null,
		title_ua: null
	},
	min_price: 3177,
	model: {
		brand: 1514,
		check_photo: false,
		default_for_studded: false,
		default_photo: 37813,
		default_studded: false,
		foreign_id: 0,
		id: 12116,
		name: "Primacy 4+",
		off_road: false,
		photo_manager_ban: false,
		season: 1,
		ti_id: null,
		vehicle_type: 1,
		winter_type: null
	},
	model_description: {ru: "", ua: ""},
	offer_group: {
		ZR: false,
		active: true,
		cdate: 1657704880,
		demo: false,
		diameter: 16,
		flange_protector: false,
		height: 55,
		homologation: null,
		homologations: [],
		id: 392846,
		load_index_double: null,
		load_index_single: 91,
		model: 12116,
		off_road: false,
		outline_white_letters: false,
		ply_rating: null,
		reinforce: null,
		run_flat: false,
		seal: null,
		silent: null,
		speed_index: 27,
		speed_index_double: null,
		studded: false,
		vehicle_type: 1,
		width: 205
	},
	offers: [
		{
			cdate: 1719332281,
			country_id: 193,
			country_iso_a2: "RS",
			country_name: "Сербия",
			country_name_ua: "Сербія",
			foreign_id: "SM000016175",
			id: 466452544,
			in_stock: 2,
			price: 3177,
			provider: {
				city: {id: 901, name: "Киев", name_ua: "Київ"},
				id: 1852,
				import: false
			},
			year: 2022
		},
		{
			cdate: 1718864641,
			country_id: 169,
			country_iso_a2: "PL",
			country_name: "Польша",
			country_name_ua: "Польща",
			foreign_id: null,
			id: 463683503,
			in_stock: 4,
			price: 3216,
			provider: {
				city: {id: 901, name: "Киев", name_ua: "Київ"},
				id: 1726,
				import: false
			},
			year: 2023
		}
	],
	page_url: "https://on-tires.com/catalog/tyre/v-392846-michelin-primacy-4--205-55-r16-91v",
	photo: [
		{url_part: "https://opt.tyreclub.com.ua/api/public/model_photo/37813", max_size: 1000},
		{url_part: "https://opt.tyreclub.com.ua/api/public/model_photo/33556", max_size: 1000},
		{url_part: "https://opt.tyreclub.com.ua/api/public/model_photo/33558", max_size: 1000},
		{url_part: "https://opt.tyreclub.com.ua/api/public/model_photo/33557", max_size: 1000}
	],
	related: [
		{
			best_offer: {city: 946, country: 42, id: 466468942, price: 2539, year: 2024},
			brand_name: "Hankook",
			default_photo: 34081,
			diameter: "16.00",
			full_name: "Hankook Ventus Prime 4 K135 205/55 R16 91V FR",
			group: 393312,
			max_price: 2539,
			min_price: 2539,
			model: "12288",
			season: 1,
			vehicle_type: 1
		},
		{
			best_offer: {city: 610, country: 42, id: 466408960, price: 2467, year: 2023},
			brand_name: "Hankook",
			default_photo: 30857,
			diameter: "16.00",
			full_name: "Hankook Kinergy Eco 2 K435 205/55 R16 91H",
			group: 321506,
			max_price: 2491,
			min_price: 2467,
			model: "6739",
			season: 1,
			vehicle_type: 1
		}
	],
	size_format: 1
}

const dataProducts = {
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
	]
}

export const Product = () => {
	const [isModalActive, setModalActive] = useState(false);
	const [modalType, setModalType] = useState('QuickOrder');
	const t = useAppTranslation();

	const handleModalOpen = (type: 'QuickOrder' | 'OnlineInstallment') => {
		setModalActive(true);
		setModalType(type)
	};

	const handleModalClose = () => {
		setModalActive(false);
	};

	return <div>
		<LayoutWrapper>
			<Breadcrumbs />
			<ProductComponent data={ data } handleModalOpen={ handleModalOpen } />
		</LayoutWrapper>
		<div className='container mx-auto'>
			<Title title={ t('similar products', true) } />
			<ProductList classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-0' data={ dataProducts } />
			<Title title='recently viewed' />
			<ProductList classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-0' data={ dataProducts } />
		</div>
		<TextSeo />
		{isModalActive && (
			<Modal onClose={handleModalClose} size={modalType === 'QuickOrder' ? 'sm:max-w-lg' : 'max-w-6xl'}>
				{modalType === 'QuickOrder' ? <QuickOrder /> : <OnlineInstallment />}
			</Modal>
		)}
	</div>
}

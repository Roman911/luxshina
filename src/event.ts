import {Product} from './models/product';
import type { Product as Products } from './models/products';

interface DataLayer {
	push: (data: Record<string, unknown>) => void;
}

interface DataLayerWindow extends Window {
	dataLayer?: DataLayer;
}

export const onItemView = (data: Product | undefined, section: string) => {
	if(!data) return;

	const items = [{
		item_name: data.full_name,
		item_id: data.id,
		price: data.min_price,
		item_brand: data.brand.name,
		item_category: section,
		item_category2: data.model.name,
	}];

	(window as DataLayerWindow).dataLayer?.push({ecommerce: null});

	const outData = {
		event: "view_item",
		ecommerce: {
			items: items
		},
	};

	console.log('outData', outData);
	(window as DataLayerWindow).dataLayer?.push(outData);
};

export const onAddToCart = (data: Product | Products | undefined, section: string, quantity: number) => {
	if(!data) return;

	let id;
	let brand;

	if("id" in data) {
		id = data.id;
		brand = data.brand.name;
	} else {
		id = data.group;
		brand = data.brand_name;
	}

	const items = [{
		item_name: data.full_name,
		item_id: id,
		price: data.min_price,
		item_brand: brand,
		item_category: section,
		item_category2: data.model.name,
		quantity,
	}];

	(window as DataLayerWindow).dataLayer?.push({ecommerce: null});

	const outData = {
		event: "add_to_cart",
		ecommerce: {
			items: items
		},
	};

	console.log('outData', outData);
	(window as DataLayerWindow).dataLayer?.push(outData);
};

// export const onOrderMakeStart = (data: Products[] | undefined) => {
// 	if(!data) return;
//
// 	console.log(data)
//
// 	let totalPrice = 0;
// 	let items = [];
// 	let items2 = [];
//
// 	data.forEach((item, index) => {
// 		totalPrice += (item.min_price * item.quantity)
//
// 		items.push({
// 			item_name: item.full_name,
// 			item_id: item.group,
// 			price: item.price,
// 			item_brand: item.full_name.split(' ')[0],
// 			index: index,
// 			item_category: Localizer.str2Ua(SECTION_NAMES[item.section]),
// 			item_variant: item.year,
// 			quantity: item.quantity,
// 		});
//
// 		items2.push({
// 			'id': item.group,
// 			'google_business_vertical': 'retail'
// 		});
//
// 		dataLayer.push({ecommerce: null});
//
// 		let outData = {
// 			event: "begin_checkout",
// 			ecommerce: {
// 				currency: "UAH",
// 				value: totalPrice,                              // Повна ціна разом з податком та доставкою (shipping)
// 				items: items
// 			},
// 			value: totalPrice,
// 			items: items2
// 		};
//
// 		console.log('outData', outData)
//
// 		dataLayer.push(outData);
// 	});
// };

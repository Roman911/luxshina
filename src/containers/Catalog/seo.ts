interface IFilter {
	width?: number
	height?: number
	diameter?: string
	country?: string
	year?: number
}

type OriginalType = {
	w: 'width',
	h: 'height',
	d: 'diameter',
	ctr: 'country',
	y: 'year',
};

const paramTrans: OriginalType = {
	w: 'width',
	h: 'height',
	d: 'diameter',
	ctr: 'country',
	y: 'year',
};

type SwappedType = {
	[K in OriginalType[keyof OriginalType]]: keyof OriginalType;
};

const paramTransInvert = Object.keys(paramTrans).reduce((acc, key) => {
	const value = paramTrans[key as keyof OriginalType];
	acc[value] = key as keyof OriginalType;
	return acc;
}, {} as SwappedType);

const digitValueToUrl = (value: number) => {
	return value.toString();
}

export const generateUrl = (filter: IFilter) => {
	const parts = [];

	if(filter.width) {
		parts.push(`${paramTransInvert.width}-${digitValueToUrl(filter.width)}`);
	}

	if(filter.height) {
		parts.push(`${paramTransInvert.height}-${digitValueToUrl(filter.height)}`);
	}

	if(filter.diameter) {
		parts.push(`${paramTransInvert.diameter}-${filter.diameter}`);
	}

	if(filter.country) {
		parts.push(`${paramTransInvert.country}-${filter.country}`);
	}

	if(filter.year) {
		parts.push(`${paramTransInvert.year}-${digitValueToUrl(filter.year)}`);
	}

	return parts.join('/');
}

type ParsedResult = {
	[key: string]: string;
};

export const parseUrl = (url: string): ParsedResult => {
	const urlParts = url.split('/');
	if (urlParts.length === 0) return {};

	const result: ParsedResult = {};

	urlParts.forEach(item => {
		const [name, id, value] = item.split('-');

		// Use type assertion to let TypeScript know that 'name' is a valid key for 'paramTrans'
		const paramName = paramTrans[name as keyof typeof paramTrans];
		if (paramName) {
			result[paramName] = value || id || '';
		}
	});

	return result;
};

import { FC } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';

interface IOption {
	value: number
	label: number | string
	p?: number
}

interface SelectProps {
	name: string
	label: string
	options: IOption[] | undefined
	onChange: (name: string, value: number | undefined) => void
}

type IsMulti = false;

const colourStyles: StylesConfig<IOption | undefined, IsMulti> = {
	control: (styles) => ({
		...styles,
		padding: '11px 4px 11px 16px',
		borderColor: 'transparent',
		backgroundColor: 'rgba(255, 255, 255, 0.16)',
		':hover': {
			borderColor: '#8CC9FF',
			boxShadow: '0 0 0 1px #8CC9FF',
		}
	}),
	singleValue: (styles) => ({
		...styles,
		fontSize: 18,
		fontWeight: 500,
		color: '#FFFFFF',
	}),
	placeholder: (styles) => ({
		...styles,
		fontSize: 18,
		fontWeight: 500,
		color: '#FFFFFF',
	}),
	indicatorSeparator: (styles) => ({
		...styles,
		display: 'none'
	}),
	dropdownIndicator: (styles) => ({
		...styles,
		color: '#FFFFFF',
		':hover': {
			color: '#FFFFFF',
		},
	}),
	clearIndicator: (styles) => ({
		...styles,
		color: '#FFFFFF',
		':hover': {
			color: '#FFFFFF',
		},
	}),
	menuList: (provided) => {
		return {
			...provided,
			'::-webkit-scrollbar': {
				width: '10px',
				backgroundColor: '#E4E4E5',
			},
			'::-webkit-scrollbar-thumb': {
				backgroundColor: '#ABAFB2',
				border: '2px solid transparent',
				borderRadius: '6px',
			}
		};
	},
};

export const MySelect: FC<SelectProps> = ({ name, label, options = [], onChange }) => {
	const handleChange = (value: SingleValue<IOption | undefined>) => {
		onChange(name, value?.value);
	}

	return <Select
		options={options}
		styles={colourStyles}
		placeholder={label}
		isClearable={true}
		onChange={handleChange}
	/>
}

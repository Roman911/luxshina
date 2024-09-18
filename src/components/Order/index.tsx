import { FC } from 'react';

//import { useAppSelector } from '../../hooks';
import { MySelect } from './Select';
import { Summary } from './Summary';
import type { ProductsProps } from '../../models/products';

const deliveryMethod = [
	{value: 1, label: 'Самовивіз зі складу'},
	{value: 2, label: 'На відділення нової пошти'},
	{value: 3, label: 'На адресу кур\'єром нової пошти'},
];

const payMethod = [
	{value: 1, label: 'Готівкою'},
	{value: 2, label: 'Оплата картою'},
	{value: 3, label: 'Оплата по реквізитам'},
	{value: 4, label: 'Безготівковим розрахунком'},
];

interface OrderProps {
	data: ProductsProps | undefined
	isLoading: boolean
	cartItems: { id: number; quantity: number }[]
}

export const OrderComponent: FC<OrderProps> = ({ data, isLoading, cartItems }) => {
	//const { lang } = useAppSelector(state => state.langReducer);

	const onChange = (name: string, value: number | string | undefined) => {
		console.log(name, value);
	}

	return <div className='flex flex-col lg:flex-row gap-6'>
		<div className='flex-1'>
			<div className='bg-white py-5 px-6'>
				<h3 className='font-bold text-xl'>Контактні дані</h3>
				<div className="relative mt-4 h-14 w-full min-w-[200px]">
					<input
						value=''
						//onChange={e => setLogin(e.target.value)}
						className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
						placeholder=' '
					/>
					<label
						className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						ПІБ
					</label>
				</div>
				<div className="relative mt-4 h-14 w-full min-w-[200px]">
					<input
						value=''
						//onChange={e => setLogin(e.target.value)}
						className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
						placeholder=' '
					/>
					<label
						className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						Номер телефона
					</label>
				</div>
				<div className="relative mt-4 h-14 w-full min-w-[200px]">
					<input
						value=''
						//onChange={e => setLogin(e.target.value)}
						className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
						placeholder=' '
					/>
					<label
						className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						Email
					</label>
				</div>
			</div>
			<div className='bg-white py-5 px-6 mt-4'>
				<h3 className='font-bold text-xl'>Доставка</h3>
				<div className="relative mt-4 w-full min-w-[200px]">
					<h4 className='font-semibold'>Выберите способ доставки</h4>
					<MySelect name='city' label='Способ доставки' options={deliveryMethod} onChange={onChange}/>
					<MySelect name='city' label='Місто' options={[]} onChange={onChange}/>
					<div className="relative mt-4 h-14 w-full min-w-[200px]">
						<input
							value=''
							//onChange={e => setLogin(e.target.value)}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							ПІБ одержувача
						</label>
					</div>
				</div>
			</div>
			<div className='bg-white pt-5 pb-10 px-6 mt-4 mb-20'>
				<h3 className='font-bold text-xl'>Оплата</h3>
				<h4 className='font-semibold mt-4'>Выберите способ оплаты</h4>
				<MySelect name='city' label='Способ оплаты' options={payMethod} onChange={onChange}/>
			</div>
		</div>
		<Summary data={ data } isLoading={ isLoading } cartItems={ cartItems } />
	</div>
};

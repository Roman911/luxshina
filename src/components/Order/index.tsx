import { FC, Dispatch, SetStateAction, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { useAppSelector, useAppTranslation } from '../../hooks';
import { MySelect } from './Select';
import { Summary } from './Summary';
import { TextFile } from '../Lib';
import { Language } from '../../models/language';
import type { ProductsProps } from '../../models/products';
import type { OrdersParamProps } from '../../models/ordersParam';

interface Options {
	value: string
	label: string
}

interface OrderProps {
	data: ProductsProps | undefined
	isLoading: boolean
	cityOptions: Options[]
	warehousesOptions: Options[] | undefined
	shippingMethod: string | number | undefined
	setCity: Dispatch<SetStateAction<string | number | undefined>>
	cartItems: { id: number; quantity: number }[]
	onChange: (name: string, value: number | string | undefined) => void
	dataOrdersParam: OrdersParamProps | undefined
}

export const OrderComponent: FC<OrderProps> = (
	{
		data,
		isLoading,
		cartItems,
		onChange,
		setCity,
		cityOptions,
		warehousesOptions,
		shippingMethod,
		dataOrdersParam
	}) => {
	const ref = useRef(null);
	const inputRef = useRef(null);
	const { control, formState: { errors } } = useFormContext();
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();

	const deliverysOptions = dataOrdersParam?.Deliverys.map(item => {
		return { value: item.deliverys_id, label: lang === Language.UA ? item.name : item.name_ru }
	});

	const paymentsOptions = dataOrdersParam?.Payments.map(item => {
		return { value: item.payments_id, label: lang === Language.UA ? item.name : item.name_ru }
	});

	return <div className='flex flex-col lg:flex-row gap-6'>
		<div className='flex-1'>
			<div className='bg-white pt-5 pb-8 px-6'>
				<h3 className='font-bold text-xl'>
					{lang === Language.UA ? 'Контактні дані' : 'Контактные данные'}
				</h3>
				<input
					type={'text'}
					placeholder=' '
				/>
				<Controller
					name="firstname"
					control={control}
					render={({field}) => {
						return <TextFile field={field} label={lang === Language.UA ? 'Ім\'я' : 'Имя'} error={typeof errors?.['firstname']?.message === 'string' ? errors['firstname'].message : null}/>
					}}
				/>
				<Controller
					name="lastname"
					control={control}
					render={({field}) => {
						return <TextFile field={field} label={lang === Language.UA ? 'Прізвище' : 'Фамилия'} error={typeof errors?.['lastname']?.message === 'string' ? errors['lastname'].message : null}/>
					}}
				/>
				<Controller
					name="surname"
					control={control}
					render={({field}) => {
						return <TextFile field={field} label={lang === Language.UA ? 'По батькові' : 'Отчество'} error={typeof errors?.['surname']?.message === 'string' ? errors['surname'].message : null}/>
					}}
				/>
				<Controller
					name="telephone"
					control={control}
					render={({field}) => {
						return <>
							<div className='relative mt-3 w-full min-w-[200px] h-14'>
								<IMaskInput
									className='peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
									mask={'{+38}(000)000-00-00'}
									lazy={ false }
									radix=""
									value={ field.value }
									unmask={true}
									ref={ref}
									inputRef={inputRef}
									onAccept={
										(value) => field.onChange(value)
									}
									placeholder=''
								/>
								<label
									className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Номер телефону
								</label>
							</div>
							<p className='ml-2 h-2 text-xs text-red-500'>
								{ typeof errors?.['telephone']?.message === 'string' ? errors['telephone'].message : null }
							</p>
						</>
					}}
				/>
				<Controller
					name="email"
					control={control}
					render={({field}) => {
						return <TextFile field={field} label={lang === Language.UA ? 'Електронна пошта' : 'Электронная почта'} error={typeof errors?.['email']?.message === 'string' ? errors['email'].message : null}/>
					}}
				/>
			</div>
			<div className='bg-white pt-5 pb-8 px-6 mt-4'>
				<h3 className='font-bold text-xl'>{lang === Language.UA ? 'Доставка та оплата' : 'Доставка и оплата' }</h3>
				<div className="relative mt-6 w-full min-w-[200px]">
					<h4 className='font-semibold'>
						{lang === Language.UA ? 'Виберіть спосіб доставки' : 'Выберите способ доставки'}
					</h4>
					<div className='mt-3'>
						<MySelect name='shipping_method' label={lang === Language.UA ? 'Спосіб доставки' : 'Способ доставки'}
											options={deliverysOptions} onChange={onChange}/>
					</div>
					{(shippingMethod === 2 || shippingMethod === 3) && <div className='mt-3'>
						<MySelect name='city' label={ t('city', true) } options={cityOptions} onChange={onChange} setCity={setCity} />
					</div>}
					{shippingMethod === 2 && warehousesOptions && warehousesOptions.length > 0 && <div className='mt-3'>
						<MySelect name='department' label={ t('department', true) } options={warehousesOptions} onChange={onChange} setCity={setCity} />
					</div>}
					{shippingMethod === 3 && <Controller
						name="address"
						control={control}
						render={({field}) => {
							return <TextFile field={field} label={lang === Language.UA ? 'Адреса (Вулиця, будинок)' : 'Адрес (Улица, дом)'} error={typeof errors?.['address']?.message === 'string' ? errors['address'].message : null}/>
						}}
					/>}
					<h4 className='font-semibold mt-6'>
						{ lang === Language.UA ? 'Виберіть спосіб оплати' : 'Выберите способ оплаты' }
					</h4>
					<MySelect name='payment_method' label='Способ оплаты' options={ paymentsOptions } onChange={ onChange }/>
				</div>
			</div>
			<div className='bg-white pt-5 pb-8 px-6 mt-4 mb-20'>
				<h4 className='font-semibold'>
					{lang === Language.UA ? 'Додати коментар' : 'Додати коментар'}
				</h4>
				<Controller
					name="comment"
					control={control}
					render={({field}) => <TextFile field={ field } label={ lang === Language.UA ? 'Ваш коментар' : 'Ваш комментарий' } error={ typeof errors?.['text']?.message === 'string' ? errors['text'].message : null } isTextarea={ true } /> }
				/>
			</div>
		</div>
		<Summary data={data} isLoading={isLoading} cartItems={cartItems}/>
	</div>
};

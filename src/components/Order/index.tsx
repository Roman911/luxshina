import { LayoutWrapper } from '../Layout';
import { Title } from '../Lib';

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
]

export const OrderComponent = () => {
	return <LayoutWrapper>
		<Title title='placing an order' />
		<div className='flex flex-col lg:flex-row gap-6'>
			<div className='flex-1'>
				<div className='bg-white py-5 px-6'>
					<h3 className='font-bold'>Контактні дані</h3>
					<div className="relative mt-4 h-11 w-full min-w-[200px]">
						<input
							value=''
							//onChange={e => setLogin(e.target.value)}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							ПІБ
						</label>
					</div>
					<div className="relative mt-4 h-11 w-full min-w-[200px]">
						<input
							value=''
							//onChange={e => setLogin(e.target.value)}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Номер телефона
						</label>
					</div>
					<div className="relative mt-4 h-11 w-full min-w-[200px]">
						<input
							value=''
							//onChange={e => setLogin(e.target.value)}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Email
						</label>
					</div>
				</div>
				<div className='bg-white py-5 px-6 mt-4'>
					<h3 className='font-bold'>Доставка</h3>
				</div>
				<div className='bg-white py-5 px-6 mt-4'>
					<h3 className='font-bold'>Оплата</h3>
				</div>
			</div>
			<div className='w-full lg:w-96'>
				<div className='bg-white'>
					<div className='pt-5 pb-2 px-6'>
						<h3 className='font-bold'>Ваше замовлення</h3>
						<div className='divide-y'>
							{data.map(item => {
								return <div key={item.group} className='flex items-center py-4'>
									<img className='w-20 h-20' src="https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/5558.400x400.jpg" alt=""/>
									<div className='ml-2 px-3 w-full'>
										<div className='font-bold text-sm'>{item.full_name}</div>
										<div className='flex justify-between text-sm mt-3'>
											<div>4 шт</div>
											<div>2200 грн</div>
										</div>
									</div>
								</div>
							})}
						</div>
					</div>
					<div className='bg-blue-50 py-5 px-6'>
						<div className='flex justify-between font-bold'>
							<div>Всього до сплати</div>
							<div>2200 грн</div>
						</div>
						<button className='btn primary w-full mt-5'>Оформити замовлення</button>
					</div>
				</div>
			</div>
		</div>
	</LayoutWrapper>
}

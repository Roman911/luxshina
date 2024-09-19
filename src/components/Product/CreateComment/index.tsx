import { Dispatch, FC, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form'

import { Rating } from '../../Lib';
import { Language } from '../../../models/language';

interface CreateCommentProps {
	lang: Language
	rate: number
	setRate: Dispatch<SetStateAction<number>>
}

export const CreateCommentComponent: FC<CreateCommentProps> = ({ lang, rate, setRate }) => {
	const { control, formState: { errors } } = useFormContext();

	return <div className='bg-white  shadow-md mt-6'>
		<h6 className='font-bold text-lg py-4 px-6 bg-blue-100'>
			{lang === Language.UA ? 'Залишити відгук' : 'Оставить отзыв'}
		</h6>
		<div className='pt-4 px-6 pb-6'>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<div>
						<div className="relative mt-4 h-14 w-full min-w-[200px]">
							<input
								{...field}
								className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
								placeholder=' '
							/>
							<label
								className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								{lang === Language.UA ? 'Ім\'я*' : 'Имя*'}
							</label>
						</div>
						<p className='ml-2 h-3 text-sm text-red-500 font-semibold'>
							{ typeof errors?.['name']?.message === 'string' ? errors['name'].message : null }
						</p>
					</div>
				)}
			/>
			<Controller
				name="text"
				control={control}
				render={({field}) => (
					<div>
						<div className="relative mt-4 w-full min-w-[200px]">
						<textarea
							rows={4}
							{...field}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
							<label
								className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
								{lang === Language.UA ? 'Коментар*' : 'Комментарий*'}
							</label>
						</div>
						<p className='ml-2 h-3 text-sm text-red-500 font-semibold'>
							{typeof errors?.['text']?.message === 'string' ? errors['text'].message : null}
						</p>
					</div>
				)}
			/>
			<div className='mt-3 mb-6 flex items-center'>
				<span className='mr-2 ml-2 text-sm font-semibold'>
					{lang === Language.UA ? 'Оцінка' : 'Оценка'}
				</span>
				<Rating commentsAvgRate={rate} size='medium' isCreateComment={true} setRate={setRate}/>
			</div>
			<button type="submit" className='btn primary'>
				{lang === Language.UA ? 'Додати відгук' : 'Добавить отзыв'}
			</button>
		</div>
	</div>
};

import { FC } from 'react';

interface SubmitFloatProps {
	element: HTMLElement | null
	btnTitle: string
	setElement: (value: null) => void
}

export const SubmitFloat: FC<SubmitFloatProps> = ({ element, btnTitle, setElement }) => {


	if(!element) return null

	return <button
		onClick={() => setElement(null)}
		className="absolute z-[100] -right-24 bg-blue-500 py-1 px-4 text-white text-sm before:content[' '] before:bg-blue-500 before:w-3 before:h-3 before:absolute before:-left-1.5 before:rotate-45 before:inset-y-1/2 before:-translate-y-2/4"
		style={{
			top: (
				element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 300
			) + 'px',
		}}
	>
		{ btnTitle }
	</button>
}
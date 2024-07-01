import React from 'react';

interface TitleProps {
	title: string
	className?: string
}

export const Title: React.FC<TitleProps> = ({ title, className='my-5 text-4xl font-bold' }) => {
	return <h2 className={ className }>{ title }</h2>
}

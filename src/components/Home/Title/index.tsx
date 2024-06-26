import React from 'react';

interface TitleProps {
	title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => {
	return <h2 className='my-5 text-4xl font-bold'>{ title }</h2>
}

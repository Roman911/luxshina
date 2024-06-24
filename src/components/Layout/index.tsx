import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface LayoutProps {
	children: ReactNode
	homePage: boolean
}

export const LayoutWrapper: React.FC<LayoutProps> = ({ children, homePage }) => {
	return <main className={classNames('container mx-auto px-4 py-5', { 'max-w-7xl': !homePage })}>
		{ children }
	</main>
}

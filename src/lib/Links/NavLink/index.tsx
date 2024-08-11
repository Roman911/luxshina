import { FC, ReactNode } from 'react';
import { NavLink as _NavLink, useLocation } from 'react-router-dom';

interface NavLinkProps {
	to: string
	className?: string
	children: ReactNode
}

export const NavLink: FC<NavLinkProps> = ({ children, to }) => {
	const locations = useLocation();

	console.log(locations)

	return <_NavLink to={to} >
		{ children }
	</_NavLink>
}

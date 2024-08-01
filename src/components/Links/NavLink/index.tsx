import { FC, ReactNode } from 'react';
import { NavLink as NavLinkRRD, useParams } from 'react-router-dom';

interface NavLinkProps {
	to: string
	className?: string
	children: ReactNode
}

export const NavLink: FC<NavLinkProps> = ({ children, to }) => {
	const params = useParams();
	const href = `${params.lang ? '/' + params.lang : ''}${to}`

	return <NavLinkRRD to={href} >
		{ children }
	</NavLinkRRD>
}
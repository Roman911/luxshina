import { FC, ReactNode } from 'react';
import { Link as LinkRRD, useParams } from 'react-router-dom';

interface LinkProps {
	to: string
	className?: string
	children: ReactNode
}

export const Link: FC<LinkProps> = ({ children, to, className }) => {
	const params = useParams();
	const href = `${params.lang ? '/' + params.lang : ''}${to}`

	return <LinkRRD to={href} className={ className } >
		{ children }
	</LinkRRD>
}

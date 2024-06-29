import React from 'react';

import type { IconProps } from '../../../module/icon';

export const TelegramIcon: React.FC<IconProps> = ({ className = 'fill-black' }) => {
	return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={ className }>
		<path
			d="M20.214 3.21595L0.723047 10.9679C-0.0613045 11.3289 -0.326594 12.0518 0.533469 12.4441L5.53374 14.083L17.6238 6.37679C18.2839 5.893 18.9597 6.02201 18.3782 6.5542L7.99447 16.2508L7.6683 20.3544C7.97041 20.988 8.52359 20.991 8.87645 20.676L11.7493 17.8725L16.6694 21.6724C17.8121 22.3701 18.4339 21.9198 18.6798 20.6409L21.907 4.8806C22.242 3.30642 21.6706 2.61281 20.214 3.21595Z"
		/>
	</svg>
}

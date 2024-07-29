import Iframe from 'react-iframe'

import { LayoutWrapper } from '../../components/Layout';
import { Title } from '../../components/Lib';

export const CalculatorForTires = () => {
	// const params = {
	// 	width: '205'
	// }

	return <LayoutWrapper>
		<Title title='tire calculator'/>
		<Iframe url="/calc/kalkulator.htm?background=2772E2"
						width="100%"
						height="2562px"
						id=""
						className=""
						display="block"
						position="relative"/>
	</LayoutWrapper>
}

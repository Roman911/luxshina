import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { ComparisonComponent } from '../../components/Comparison';

export const Comparison = () => {
	return <LayoutWrapper >
		<Breadcrumbs />
		<Title title='favorites' />
		<ComparisonComponent />
	</LayoutWrapper>
}

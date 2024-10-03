import { memo } from 'react';
import DOMPurify from 'dompurify';

import { baseDataAPI } from '../../../../services/baseDataService';
import { Language } from '../../../../containers/Layout/Header/Language';
import { useAppSelector } from '../../../../hooks';
import { Link } from '../../../../lib';
import { Contacts } from '../../../../containers/Contacts';

export const TopLine = () => {
	const { settings } = useAppSelector(state => state.settingsReducer);
	const { lang } = useAppSelector(state => state.langReducer);
	const { data } = baseDataAPI.useFetchStatiAliasAllQuery('');

	const HtmlContent = memo(({ htmlString }: { htmlString: string }) => {
		const sanitizedHtml = DOMPurify.sanitize(htmlString);
		return (
			<div
				className="ml-2 2xl:ml-10 text-sm 2xl:text-base hidden lg:block"
				dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
			/>
		);
	});

	return <div className='bg-black text-white'>
		<div className='container mx-auto flex justify-between py-2 px-4'>
			<Contacts className='lg:hidden' />
			<div className='flex items-center'>
				<Language />
				<div className='ml-2 2xl:ml-10 text-sm 2xl:text-base hidden lg:block'>
					<HtmlContent htmlString={settings[lang].config_open} />
				</div>
			</div>
			<nav className='gap-2 2xl:gap-5 items-center hidden lg:flex'>
				{ data?.header.map((item, index) => {
					return <Link
						key={ index }
						to={ `/page/${item.slug}` }
						className='text-xs 2xl:text-sm font-medium uppercase'>
						{ item.descriptions[lang].title }
					</Link>
				}) }
			</nav>
		</div>
	</div>
};

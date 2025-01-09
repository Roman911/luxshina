import { memo } from 'react';
import DOMPurify from 'dompurify';

import { useAppSelector } from '../../../hooks';

export const OnlineInstallment = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);

	const HtmlContent = memo(({ htmlString }: { htmlString: string }) => {
		const sanitizedHtml = DOMPurify.sanitize(htmlString, {
			ADD_TAGS: ['iframe'],
			ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'loading', 'referrerpolicy']
		});

		return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
	});

	return <div className='bg-white p-14 divide-y divide-[#D8D8D9]'>
		<HtmlContent htmlString={ settings[lang].kredit } />
	</div>
};

import { changedLang } from '../../../store/reducers/langSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { HeaderComponents } from '../../../components/Layout/Header';
import i18n from "../../../lib/i18n.ts";

export const Header = () => {
	const dispatch = useAppDispatch();
	const { lang } = useAppSelector(state => state.langReducer);

	const changedAppLang = (lang: string) => {
		i18n.changeLanguage(lang).then(r => r);
		dispatch(changedLang(lang));
		localStorage.setItem('lang', JSON.stringify(lang));
	}

	return <HeaderComponents lang={ lang } changedAppLang={ changedAppLang } />
}
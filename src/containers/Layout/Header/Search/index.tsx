import { useEffect, useState, useRef } from 'react';
import { SearchComponent } from '../../../../components/Layout/Header/Search';

const placeHolderExamples = [
	'235/45 R18 RunFlat',
	'Bridgestone 205 55 16',
	'зима 185 65 14',
	'Nexen r15 91H',
	'R22 RunFlat',
	'Nokian R17',
	'Michelin 225 R17',
	'Premiorri Solazo',
	'245 R18 FR',
];

export const Search = () => {
	const [placeholder, setPlaceholder] = useState('');
	const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
	const currentLetter = useRef(0);

	useEffect(() => {
		const typePlaceholder = () => {
			const currentPlaceholder = placeHolderExamples[currentPlaceholderIndex];

			if (currentLetter.current <= currentPlaceholder.length) {
				setPlaceholder(currentPlaceholder.slice(0, currentLetter.current));
				currentLetter.current += 1;
			} else {
				setTimeout(() => {
					placeholderRenderNext();
				}, 1000);
				return;
			}

			const timer = setTimeout(typePlaceholder, 50);
			return () => clearTimeout(timer);
		};

		typePlaceholder();
	}, [currentPlaceholderIndex]);

	const placeholderRenderNext = () => {
		currentLetter.current = 0;
		const nextIndex = (currentPlaceholderIndex + 1) % placeHolderExamples.length;
		setCurrentPlaceholderIndex(nextIndex);
	};

	return <SearchComponent placeholder={ placeholder } />;
};

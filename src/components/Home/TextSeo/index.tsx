import { useAppSelector } from '../../../hooks';

export const TextSeo = () => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <div className='container mx-auto max-w-7xl mt-20 mb-24 px-2'>
		<h3 className='text-3xl font-bold'>{ lang === 'ua' ? 'Інтернет-магазин шин і дисків' : 'Интернет-магазин шин и дисков' }</h3>
		{lang === 'ua' ?
			<>
				<p className='mt-10 leading-7'>Купуйте шини в місті Київ. Купити шини в Києві, літні або зимові, зі складу і за доступними цінами найкраще у
					Нас! Інтернет-магазин Luxshina спеціалізується на продажу шин і дисків провідних світових виробників (Nokian,
					Dunlop, Hankook, Toyo, Bridgestone і т. Д.).</p>
				<p className='mt-10 leading-7'>Ми працюємо з 2008 року і за 12 років роботи змогли створити команду справжніх професіоналів своєї справи,
					які допоможуть кожній людині підібрати і купити шини для свого автомобіля в Києві, Україні. На нашому
					e-Commerce майданчику, кожен покупець може з легкістю, в кілька кліків підібрати і замовити шини до будь-якої
					марки автомобіля, по типорозміру в каталозі зі зручним і швидким фільтром.</p>
				<p className='mt-10 leading-7'>В каталозі онлайн-магазина Luxshina представлені літні і зимові шини таких марок як: Dunlop, Bridgestone,
					Hankook, Nokian, Тoyo, Avon, Amtel, Barum, BFGoodrich, Continental, Cooper, Debica, Falken, Fulda, Goodyear,
					Gislaved, Kleber, Matador, Michelin, Kumho, Marangoni, Maxxis, Pirelli, Sportiva, Sava, Vredestein, Yokohama і
					інші.</p>
				<p className='mt-10 leading-7'>Сезонна заміна покришок - це не просто рекомендація автовиробників. Вона дозволяє гарантувати безпечну їзду
					на дорогах будь-якої складності</p>
			</> :
			<>
				<p className='mt-10 leading-7'>Купите шины в городе Киев. Купить шины в Киеве, летние или зимние, со склада и по доступным ценам лучше всего
					у нас! Интернет-магазин Luxshina специализируется на продаже шин и дисков ведущих мировых производителей
					(Nokian, Dunlop, Hankook, Toyo, Bridgestone и т.д.).</p>
				<p className='mt-10 leading-7'>Мы работаем с 2008 года, и за 12 лет работы смогли создать команду настоящих профессионалов своего дела,
					которые помогут каждому человеку подобрать и купить шины для своего автомобиля в Киеве, Украине. На нашей
					e-Commerce площадке, каждый покупатель может с легкостью, в несколько щелчков подобрать и заказать шины к
					любой марке автомобиля, по типоразмеру в каталоге с удобным и быстрым фильтром.</p>
				<p className='mt-10 leading-7'>В каталоге онлайн-магазина Luxshina представлены летние и зимние шины таких марок как: Dunlop, Bridgestone,
					Hankook, Nokian, Toyota, Avon, Amtel, Barum, BFGoodrich, Continental, Cooper, Debica, Falken, Fulda, Goodyear,
					Gislaved, Kleber , Michelin, Kumho, Marangoni, Maxxis, Pirelli, Sportiva, Sava, Vredestein, Yokohama и
					другие.</p>
				<p className='mt-10 leading-7'>Сезонная замена покрышек – это не просто рекомендация автопроизводителей. Она позволяет гарантировать
					безопасную езду на дорогах любой сложности.</p>
			</>
		}
	</div>
}

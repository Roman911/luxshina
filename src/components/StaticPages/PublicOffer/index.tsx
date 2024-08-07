import { FC } from 'react';

import styles from '../index.module.scss';

interface PublicOfferProps {
	lang: string
}

export const PublicOffer: FC<PublicOfferProps> = ({ lang }) => {
	return <div className={styles['static-page']}>
		{lang === 'ua' ? <>
			<h3>ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ</h3>
			<p>За цим Договором одна сторона Продавець, з одного боку, і будь-яка особа, яка прийнялаумови даного Договору
				публічної оферти - Покупець, з іншого боку, далі разом - Сторони, уклали даний Договір публічної оферти,
				адресований необмеженому колу осіб, який є офіційною публічною пропозицією Продавця укласти з Покупцями договір
				купівлі-продажу Товарів, фотографії яких розміщені у відповідному розділі Веб-сайту https://luxshina.ua</p>
			<p>Продавці, що мають намір здійснювати продаж Товарів за допомогою Веб-сайту https://luxshina.ua та Покупці при
				придбанні Товарів, зображення яких розміщені на відповідних сторінкахВеб-сайту https://luxshina.ua, приймають
				умови цього Договору про нижченаведене.</p>
			<ol>
				<li className='font-bold mt-2 mb-3'>ЗАГАЛЬНІ ПОЛОЖЕННЯ</li>
				<ol>
					<li>Договірні відносини між Продавцем і Покупцем оформляються у вигляді Договору публічної оферти.</li>
					<li>Договір публічної оферти є публічним, тобто відповідно до статей 633, 641 Цивільного кодексу України його
						умови однакові для всіх Покупців незалежно від статусу (фізична особа, юридична особа, фізична особа —
						підприємець). При повній згоді з даним Договором Покупець приймає умови та порядок оформлення замовлення,
						оплати та доставки товару Продавцем, відповідальності за недобросовісне Замовлення і за невиконання умов
						цього Договору.
					</li>
					<li>Для регулювання договірних правовідносин за Договором Сторони обирають та застосовують чинне законодавство
						України.
					</li>
				</ol>
				<li className='font-bold mt-2 mb-3'>ТЕРМІНИ І ВИЗНАЧЕННЯ</li>
				<ul>
					<li>Договір публічної оферти – публічний договір, зразок якого розміщений на Веб-сайті https://luxshina.ua, і
						застосування якого є обов’язковим для всіх відвідувачів сайту, щомістить пропозицію Продавця щодо придбання
						Товару, зображення якого розміщено на Веб-сайті https://luxshina.ua, спрямовану невизначеному колу осіб, у
						тому числі Покупцям.
					</li>
					<li>Продавець - юридична особа або фізична особа-підприємець, яка розміщує на Сайті інформацію про товари, які
						реалізує та послуги, які пропонує. Продавцем може бути як Адміністрація, так і будь-яка особа, якій
						Адміністрація Сайту надала дозвіл на розміщення відомостей про товар/послуги такої особи.
					</li>
					<li>Покупець – будь – яка фізична або юридична особа, яка здійснює замовлення в даному інтернет – магазині.
					</li>
					<li>Пропозиція - інформація, яка розміщена на Сайті інтернет магазину про конкретний Товар, який може бути
						придбаний Покупцем. Пропозиція включає в себе: інформацію щодо самого товару, інформацію про його ціну,
						способи оплати та доставки, а також інші умови придбання Товару. Пропозицією є лише інформація про можливі
						умови придбання Товару.
					</li>
					<li>Замовлення - звернення Покупця через Сайт до Продавця з проханням продати Товар, а також сукупність
						товарів, які замовив покупець.
					</li>
					<li>Інтернет – магазин – офіційний сайт інтернет - магазину Продавця є «LUXSHINA.UA», розміщений на сайті
						https://luxshina.ua. В рамках даного договору, поняття Інтернет - магазин та Магазин, а також інтернет
						адреса https://luxshina.ua, являються тотожнимита трактуються аутентично в контексті договору – оферти.
					</li>
					<li>Відвідувач - особа, яка зайшла на сайт та переглядає на Сайті і/або замовляє та/або отримує товари з
						використанням сайту.
					</li>
					<li>Дистанційна торгівля - форма продажу товарів поза торговельними або офісними приміщеннями, за якої вибір
						товару та його замовлення не збігаються у часі з безпосереднім передаванням обраного товару Покупцю.
					</li>
					<li>Засоби дистанційного зв’язку – телекомунікаційні мережі, поштовий зв'язок, телебачення, інформаційні
						мережі, зокрема Інтернет, які можуть використовуватися для укладення договір на відстані.
					</li>
					<li>Товар – автомобільні шини та диски.</li>
				</ul>
				<li className='font-bold mt-2 mb-3'>ПРЕДМЕТ ДОГОВОРУ ТА ПОРЯДОК ЙОГО УКЛАДАННЯ</li>
				<ol>
					<li>Продавець зобов’язується на умовах та в порядку, визначених цим Договором, продати Товар на підставі
						Замовлення Покупця, а Покупець зобов’язується на умовах та в порядку, визначених цим Договором, придбати
						Товар і сплатити за нього кошти.
					</li>
					<li>Продавець гарантує, що Товар не переданий в заставу, не є предметом спору, не перебуває під арештом, а
						також на нього відсутні будь-які права третіх осіб.
					</li>
					<li>Продавець та Покупець підтверджують, що чинний Договір не є фіктивною чи удаваною угодою або угодою,
						укладеною під впливом тиску чи обману.
					</li>
					<li>Продавець підтверджує, що має всі необхідні дозволи на здійснення господарської діяльності, які регулюють
						сферу правовідносин, що виникають та діють в процесі виконання цього Договору.
					</li>
					<li>Датою укладення Договору-оферти та моментом повного й беззаперечного прийняттямПокупцем умов Договору
						вважається дата здійснення Покупцем замовлення в Інтернет-магазині LUXSHINA.UA, за умови отримання Покупцем
						від Продавця підтвердження про оформленнязамовлення (смс інформування стосовно статусу замовлення про
						прийняття замовлення не є фактом оформлення замовлення). Придбання товару в даному інтернет – магазині
						вважаєтьсяусним підтвердженням факту приєднання до умов договору. У разі необхідності, за бажаннямПокупця,
						Договір може бути оформлений у письмовій формі.
					</li>
				</ol>
			</ol>
		</> : <>
			<h3>ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</h3>
			<p>По данному Договору одна сторона Продавец, с одной стороны и любое лицо, принявшее условия настоящего Договора публичной оферты – Покупатель, с другой стороны, далее вместе – Стороны, заключили данный Договор публичной оферты (далее Договор), адресованный неограниченному кругу лиц, являющихся официальным публичным предложением Продавца заключить с Покупателями договор купли – продажи Товаров, фотографии которых размещены в соответствующем разделе веб – сайта https://luxshina.ua</p>
			<p>Продавцы, которые имеют намерения осуществлять продажу Товаров с помощью веб – сайта https://luxshina.ua и Покупатели при приобретении Товаров, изображения которых размещены на соответствующих страницах Веб-сайта https://luxshina.ua, принимают условия настоящего Договора о нижеуказанном.</p>
			<ol>
				<li className='font-bold mt-2 mb-3'>ОБЩЕЕ ПОЛОЖЕНИЕ</li>
				<ol>
					<li>Договорные отношения между Продавцом и Покупателем оформляется в виде Договора публичной оферты.</li>
					<li>Договор публичной оферты является публичным, то есть в соответствии со статьями 633, 641 Гражданского кодекса Украины, его условия одинаковы для всех Покупателей независимо от статуса (физическое лицо, юридическое лицо, физическое лицо - предприниматель). При полном согласии с настоящим Договором Покупатель принимает условия и порядок оформления заказа, оплаты и доставки товара Продавцом, ответственности за недобросовестных заказ и невыполнение условий настоящего Договора.</li>
					<li>Для регулирования договорных правоотношений за Договором, Стороны выбирают и употребляют действующее законодательство Украины.
					</li>
				</ol>
				<li className='font-bold mt-2 mb-3'>ОБОЗНАЧЕНИЯ И ОПРЕДЕНИЕ</li>
				<ul>
					<li>Договор публичной оферты – публичный договор, образец которого размещена на Веб-сайті https://luxshina.ua, и употребление которого является обязательным для всех посетителей сайта, который содержит предложение Продавца касаемо приобретения Товара, изображение которого размещено на Веб-сайте https://luxshina.ua, направленную неопределенному кругу лиц, в том числе Покупателям.
					</li>
					<li>Администрация – Физическое лицо-предприниматель Степаненко Богдан Николаевич</li>
					<li>Продавец – юридическое лицо или физическое лицо – предприниматель, который размещает на Сайте информацию о товаре, которые реализуются и услуги, которые предлагаются. Продавцом может быть как Администрация, так и любое лицо, которой Администрация Сайта предоставила доступ на размещение ведомостей о товаре/услуге.</li>
					<li>Покупатель – любое физическое или юридическое лицо, которое совершает заказ в данном интернет – магазине.
					</li>
					<li>Предложения - информация, которая размещена на Сайте интернет – магазина о конкретном Товаре, который может быть приобретен Покупателем. Предложение включает в себя: информацию касаемо самого товара, информацию о его цене, способ оплати и доставки, а также другие условия приобретения Товара. Предложение является только информацией о возможных условиях приобретения Товара.
					</li>
					<li>Заказ – обращение Покупателя через Сайт к Продавцу с просьбой продать Товар, а также сопутствующие товары, которые заказал Покупатель.
					</li>
					<li>Интернет – магазин – официальный сайт интернет – магазина Продавца является «LUXSHINA.UA», размещённый на сайте https://luxshina.ua. В рамках данного договора, понятие Интернет - магазин и Магазин, а также веб – сайт https://luxshina.ua, являются идентичными и трактуются одинаково в контексте договора – оферты.
					</li>
					<li>Посетитель- лицо, которое зашло на сайт и просмотрело на сайте и /или заказывает и/или получает Товар с использованием сайта.
					</li>
					<li>Дистанционная торговля - форма продажи товаров вне торговых или офисных помещений, за которой выбор товара и его заказ не совпадает во времени с непосредственной передачей выбранного товара Покупателем.
					</li>
					<li>Средства дистанционной связи – телекоммуникационные сети, почтовая связь, телевиденье, информационные сети, в том числе Интернет, которые могут использоваться для заключения договоров на расстоянии.
					</li>
					<li>Товар – автомобильные шины, диски, комплектующие и масла.</li>
				</ul>
				<li className='font-bold mt-2 mb-3'>ПРЕДМЕТ ДОГОВОРУ И ПОРЯДОК ЕГО ЗАКЛЮЧЕНИЯ</li>
				<ol>
					<li>Продавец обязуется на условиях и в порядке, определенных данным Договором, продать Товар на основании Заказа Покупателя, а Покупатель обязуется на условиях и в порядке, определенных данным Договором, приобрести Товар и уплатить за него средства.
					</li>
					<li>Продавец гарантирует, что Товар, не переданный в заставу, не является предметом спора, не находится под арестом, а также на него отсутствуют любые права третьих лиц.
					</li>
					<li>Продавец и Покупатель подтверждают, что действующий Договор не является фиктивным или мнимым соглашением, или соглашением, заключенным под воздействием давления или обмана.
					</li>
					<li>Продавец подтверждает, что имеет все необходимые разрешения на совершения хозяйственной деятельности, которые регулируют сферу правоотношения, которые возникают и действуют в процессе выполнения, данного Договору.
					</li>
					<li>Датою заключения Договора-оферты и моментом полного и безоговорочного принятия Покупателем условий Договора считается дата совершения Покупателем заказа в Интернет-магазине LUXSHINA.UA, при условии получения Покупателем от Продавца подтверждения про оформление заказа (смс информирование касаемо статуса заказа о принятии заказа не является фактом оформления заказа). Приобретение товара в данному интернет – магазине считается устным подтверждением факта присоединения к условиям договора. В случае необходимости, по желанию Покупателя, Договор может быть оформленным в письменной форме.
					</li>
				</ol>
			</ol>
		</>}
	</div>
}

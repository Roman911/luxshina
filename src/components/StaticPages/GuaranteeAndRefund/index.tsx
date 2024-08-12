import { FC } from 'react';

import styles from '../index.module.scss';

import { Language } from '../../../models/language';

interface GuaranteeAndRefundProps {
	lang: Language
}

export const GuaranteeAndRefund: FC<GuaranteeAndRefundProps> = ({ lang }) => {
	return <div className={styles['static-page']}>
		{lang === Language.UA ? <>
			<h3>На всі куплені товари у інтернет-магазині On-tires.com діє заводська гарантія від виробника.</h3>
			<p>Гарантійним випадком вважається наявність заводського браку виявленого при отриманні товару, або при
				встановленні шини на диск.</p>
			<p>*погано балансується шина, не тримає номінальний тиск, при накачуванні виникає «грижа» і т.д.</p>
			<p>При отриманні товару уважно перевіряйте зовнішний вигляд, комплектацію, маркування.</p>
			<p>*після початку використання товару, заводська гарантія від виробника припиняє свою дію.</p>
			<h3>Згідно із «Закону України про захист прав споживачів ст. 9 п. 1» придбаний товар у інтернет-магазині
				luxshina.ua Ви можете повернути протягом 14 днів з дня покупки.</h3>
			<h3>Можливі причини повернення:</h3>
			<ul>
				<li>товар має заводський брак (погано балансується шина, не тримає номінальний тиск, при накачуванні виникає
					«грижа» і т.д.)
				</li>
				<li>замовленний товар не відповідає параметрам вказаним при заказі</li>
				<li>особисті причини покупця</li>
			</ul>
			<p>*При отриманні товару потрібно обов'язково перевірити зовнішній вигляд товару на явні ознаки заводського
				браку.</p>
			<h3>Умови, за яких повернення можливе:</h3>
			<ul>
				<li>куплені шини або диски не встановлювалися на автомобіль</li>
				<li>товар не має сторонніх пошкоджень</li>
				<li>збережено товарний вигляд</li>
				<li>з дня покупки минуло не більше 14 днів</li>
			</ul>
			<h3>Умови повернення грошей:</h3>
			<ul>
				<li>Повернення грошей здійснюється після отримання товару від покупця</li>
			</ul>
		</> : <>
			<h3>На все купленные товары в интернет-магазине On-tires.com действует заводская гарантия от производителя.</h3>
			<p>Гарантийным случаем считается наличие заводского брака, обнаруженного при получении товара, или при установке
				шины на диск.</p>
			<p>*плохо балансируется шина, не держит номинальное давление, при накачивании возникает «грыжа» и т.д.</p>
			<p>При получении товара внимательно проверяйте внешний вид, комплектацию, маркировку.</p>
			<p>*после начала использования товара, заводская гарантия от производителя прекращает свое действие.</p>
			<h3>Согласно «Закону Украины о защите прав потребителей ст. 9 п. 1» приобретенный товар в интернет-магазине
				luxshina.ua Вы можете вернуть в течение 14 дней со дня покупки.</h3>
			<h3>Возможные причины возврата:</h3>
			<ul>
				<li>товар имеет заводской брак (плохо балансируется шина, не держит номинальное давление, при накачивании возникает «грыжа» и т.д.)</li>
				<li>заказанный товар не соответствует параметрам указанным при заказе</li>
				<li>личные причины покупателя</li>
			</ul>
			<p>*При получении товара нужно обязательно проверить внешний вид товара на явные признаки заводского брака.</p>
			<h3>Условия, при которых возврат возможен:</h3>
			<ul>
				<li>купленные шины или диски не устанавливались на автомобиль</li>
				<li>товар не имеет посторонних повреждений</li>
				<li>сохранен товарный вид</li>
				<li>со дня покупки прошло не более 14 дней</li>
			</ul>
			<h3>Условия возврата денег:</h3>
			<ul>
				<li>Возврат денег осуществляется после получения товара от покупателя</li>
			</ul>
		</>}
	</div>
}

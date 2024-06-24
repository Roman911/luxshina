import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export const HeaderBottom = () => {
	return <div className='bg-white'>
		<nav className='container mx-auto flex justify-center items-center gap-8 p-5'>
			<Link className={ styles.link } to={`catalog/tyre`}>Автошини</Link>
			<Link className={ styles.link } to={`catalog/disk`}>Автодиски</Link>
			<Link className={ styles.link } to='/'>Вантажні шини</Link>
			<Link className={ styles.link } to='/'>Мотошини</Link>
			<Link className={ styles.link } to='/'>Акумулятори</Link>
			<Link className={ styles.link } to='/'>Автотовари</Link>
			<Link className={ styles.link } to='/'>Шинний калькулятор</Link>
		</nav>
	</div>
}
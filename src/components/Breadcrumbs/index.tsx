import styles from './index.module.scss';

export const Breadcrumbs = () => {
	return <nav className='py-2.5'>
		<ol className={ styles.breadcrumbs }>
			<li className={ styles['breadcrumbs-item'] }><a href="#">Home</a></li>
			<li className={ styles['breadcrumbs-item'] }><a href="#">Library</a></li>
			<li className={ styles['breadcrumbs-item'] }><a href="#">Data</a></li>
		</ol>
	</nav>
}

import { Link } from '../Links';
import { HomeIcon } from '../Lib/Icons';

export const Breadcrumbs = () => {
	return <nav className='py-2.5'>
		<ol className='flex overflow-auto max-w-full whitespace-nowrap'>
			<li className='text-sm'>
				<Link to="/"><HomeIcon className='fill-[#575C66]'/></Link>
			</li>
			<li className='text-sm text-[#575C66] hover:text-blue-500 before:content-["/"] pl-1.5 before:pr-1.5'>
				<Link className='underline' to="/">Шини</Link>
			</li>
			<li className='text-sm text-[#575C66] hover:text-blue-500 before:content-["/"] pl-1.5 before:pr-1.5'>
				<Link className='underline' to="/">Шини Uniroyal</Link>
			</li>
			<li className='text-sm text-[#161111] font-bold before:content-["/"] pl-1.5 before:pr-1.5'>
				Uniroyal WinterExpert 195/65 R15 91T
			</li>
		</ol>
	</nav>
}

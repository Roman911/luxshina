import React from "react";

interface AuthProps {
	login: string
	password: string
	error: boolean
	handleSubmit: (e: { preventDefault: () => void; }) => void
	setLogin: (e: string) => void
	setPassword: (e: string) => void
}

export const AuthComponent: React.FC<AuthProps> = ({ login, password, error, handleSubmit, setLogin, setPassword }) => {
	return <div className='w-full h-screen'>
		<div className='container mx-auto max-w-sm mt-48'>
			<h4
				className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
				Sign In
			</h4>
			<p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
				Enter your login and password.
			</p>
			<form className="mt-8 mb-2 w-full md:w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
				<div className="mb-4 flex flex-col gap-6">
					<div className="relative h-11 w-full min-w-[200px]">
						<input
							value={login}
							onChange={e => setLogin(e.target.value)}
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Login
						</label>
					</div>
					<div className="relative h-11 w-full min-w-[200px]">
						<input
							value={password}
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=' '
						/>
						<label
							className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Password
						</label>
					</div>
					{error && <p className='text-sm text-red-700'>Wrong login or password</p>}
				</div>
				<button
					className="mt-6 block w-full select-none uppercase btn primary"
					type="submit"
					data-ripple-light="true"
				>
					Log In
				</button>
			</form>
		</div>
	</div>
}

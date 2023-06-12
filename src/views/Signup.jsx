import { useNavigate, Link } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import useAuth from '../hooks/useAuth'

function SignUp() {
  const { post } = useFetch()
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const handleLogin = async e => {
    e.preventDefault()

    const user_data = Object.fromEntries(new FormData(e.target))

    // ToDo: Validate data

    const { data, error } = await post({ url: '/auth/signup', body: user_data })
    if (error) return false

    setUser(data)
    return navigate('/joblist')
  }

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5"></div>
      </div>

      <div className="mt-5 md:col-span-2 md:mt-0 w-full max-w-md space-y-8 mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
            Or{' '}
            <Link to="#" className="font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500">
            start your 14-day free trial
            </Link>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="overflow-hidden sm:rounded-md">
            <div className="">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">First name</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="John"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-white">Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
                  <input
                    type="text"
                    name="email"
                    id="email-address"
                    autoComplete="email"
                    placeholder="john@doe.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="123456"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password_confirm" className="block text-sm font-medium text-gray-700 dark:text-white">Password Confirmation</label>
                  <input
                    type="password"
                    name="password_confirm"
                    id="password_confirm"
                    placeholder="123456"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

              </div>
            </div>
            <div className="py-5 text-right">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp

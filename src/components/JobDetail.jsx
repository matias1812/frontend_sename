import { Link } from 'react-router-dom'

function JobDetail({ id, name, icon, colour = 'blue', edited, created }) {
  const link = `/jobdetail/${id}`

  return <li className='flex items-start rounded-xl bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-4 shadow-lg border-solid border'>
    <Link to={link} className={`flex h-14 w-14 items-center justify-center rounded-full border-2`}>
      <i className={`icon-${icon} text-2xl `}></i>
    </Link>

    <Link to={link} className="flex flex-col flex-grow ml-4 dark:text-white">
      <h2 className="font-semibold">{name}</h2>
    </Link>
  </li>
}

export default JobDetail

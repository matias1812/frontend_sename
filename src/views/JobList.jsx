import { useState, useEffect } from 'react'
import JobDetail from '../components/JobDetail'
import useFetch from '../hooks/useFetch'

function JobList() {
  const [jobLists, setJobLists] = useState([])
  const { get } = useFetch()

  useEffect(() => {
    (async () => {
      const { data } = await get({ url: '/joblist' })
      setJobLists(data)
    })()
  }, [])

  return <div className="flex flex-col">
    <h2 className="my-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500">jobLists</h2>
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      { jobLists.map(job => <JobDetail key={job.id} {...job} />) }

    </ul>
  </div>
}

export default JobList

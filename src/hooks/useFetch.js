import Http from '../services/httpServices'
import useAuth from './useAuth'
function useFetch() {
  const { token, setUser } = useAuth()

  const handleResponse = ({ data, loading, error }) => {

    if (data?.user && data?.accessToken) {
      setUser({...data})
    }

    return { error, data, loading }
  }

  return {
    get: ({ url, body, content_type  }) => Http({ method: 'GET', token, url, body, content_type  }).then(handleResponse),
    post: ({ url, body, content_type }) => Http({ method: 'POST', token, url, body, content_type }).then(handleResponse),
    put: ({ url, body, content_type }) => Http({ method: 'PUT', token, url, body, content_type }).then(handleResponse),
    patch: ({ url, body, content_type }) => Http({ method: 'PATCH', token, url, body, content_type }).then(handleResponse),
    del: ({ url }) => Http({ method: 'DELETE', token, url })
  }
}

export default useFetch

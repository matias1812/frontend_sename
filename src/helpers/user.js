import { user_local_storage_key } from '../config'

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(user_local_storage_key))
}

export default getCurrentUser

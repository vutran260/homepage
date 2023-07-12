import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount(body) {
    return http.post('/register', body)
  },
  login(body) {
    return http.post('/login', body)
  },
  logout() {
    return http.post('/logout')
  }
}

export default authApi

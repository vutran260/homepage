import http from '../utils/http'

const URL = 'contacts'
const contactApi = {
  createContact(body) {
    return http.post(URL, {
      data: body
    })
  }
}

export default contactApi

import http from '../utils/http'

const URL = 'posts'
const postApi = {
  getPosts(params) {
    return http.get(URL, {
      params
    })
  },
  getPostDetail(id) {
    return http.get(`${URL}/${id}`)
  }
}

export default postApi

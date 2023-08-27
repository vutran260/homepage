import http from '../utils/http'

const URL = 'posts'
const postApi = {
  getPosts(params) {
    return http.get(`${URL}?populate=*&sort=createdAt:desc`, {
      params
    })
  },
  getPostDetail(id) {
    return http.get(`${URL}/${id}?populate=*`)
  }
}

export default postApi

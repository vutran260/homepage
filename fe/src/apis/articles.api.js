import http from '../utils/http'

const URL = 'articles'
const articleApi = {
  getArticles(params) {
    return http.get(`${URL}?populate=*&sort=createdAt:desc`, {
      params
    })
  },
  getArticleDetail(id) {
    return http.get(`${URL}/${id}?populate=*`)
  }
}

export default articleApi

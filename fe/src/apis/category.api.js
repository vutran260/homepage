import http from 'src/utils/http'
import { Category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi

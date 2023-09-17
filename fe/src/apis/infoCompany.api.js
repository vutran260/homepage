import http from 'src/utils/http'

const URL = 'info-companies'

const infoCompanyApi = {
  getInfoCompany() {
    return http.get(URL)
  }
}

export default infoCompanyApi

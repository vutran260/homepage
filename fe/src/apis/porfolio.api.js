import http from 'src/utils/http'

const URL = 'portfolios'

const portfolioApi = {
  getPortfolios() {
    return http.get(URL)
  }
}

export default portfolioApi

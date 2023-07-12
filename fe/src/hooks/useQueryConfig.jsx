import { omitBy, isUndefined } from 'lodash'
import useQueryParams from './useQueryParams'

export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig = omitBy(
    {
      ...queryParams,
      populate: '*',
      pagination: {
        page: queryParams.page || '1',
        pageSize: queryParams.pageSize || '3'
      },
      filters: {
        categories: queryParams.category
      }
    },
    isUndefined
  )
  return queryConfig
}

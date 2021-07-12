import { request } from '@/utils/request'

export async function DataGraph(data: any) {
  return request({
    url: `/go/src/colly/funds/code/data-graph.json`,
    method: 'get',
    data: data
  })
}

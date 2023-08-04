<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <div id="main"></div>
  <div id="test"></div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import * as echarts from 'echarts'
  import { DataGraph } from '@/api/e-charts'

  export default defineComponent({
    name: 'ECharts',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'ECharts Page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
    methods: {
      createECharts(legend: string[], xAxis: string[], series: any[]) {
        const dom = document.getElementById('main') as HTMLElement
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(dom)
        console.log(28, myChart)
        // 绘制图表
        myChart.setOption({
          title: {
            text: '折线'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            top: '12',
            right: '60',
            bottom: '6',
            left: '60',
            // data: ['000858:五粮液', '600519:贵州茅台', '601012:隆基股份']
            data: legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['2021-0709', '2021-0712', '2021-0712']
            data: xAxis
          },
          yAxis: {
            type: 'value'
          },
          //   series: [
          //     {
          //       name: '000858:五粮液',
          //       type: 'line',
          //       data: [93, 84, 73]
          //     },
          //     {
          //       name: '600519:贵州茅台',
          //       type: 'line',
          //       data: [93, 84, 73]
          //     },
          //     {
          //       name: '601012:隆基股份',
          //       type: 'line',
          //       data: [93, 84, 73]
          //     }
          //   ],
          series: series
        })
      },
      createEChartsGraph() {
        const dom = document.getElementById('test') as HTMLElement
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(dom)
        const option = {
          title: {
            text: 'Graph 简单示例'
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              roam: true,
              label: {
                show: true
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 20
              },
              data: [
                {
                  name: '节点1',
                  x: 300,
                  y: 300
                },
                {
                  name: '节点2',
                  x: 800,
                  y: 300
                },
                {
                  name: '节点3',
                  x: 550,
                  y: 100
                },
                {
                  name: '节点4',
                  x: 550,
                  y: 500
                }
              ],
              // links: [],
              links: [
                {
                  source: 0,
                  target: 1,
                  symbolSize: [5, 20],
                  label: {
                    show: true
                  },
                  lineStyle: {
                    width: 5,
                    curveness: 0.2
                  }
                },
                {
                  source: '节点2',
                  target: '节点1',
                  label: {
                    show: true
                  },
                  lineStyle: {
                    curveness: 0.2
                  }
                },
                {
                  source: '节点1',
                  target: '节点3'
                },
                {
                  source: '节点2',
                  target: '节点3'
                },
                {
                  source: '节点2',
                  target: '节点4'
                },
                {
                  source: '节点1',
                  target: '节点4'
                }
              ],
              lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          ]
        }
        myChart.setOption(option)
        myChart.on('click', function (params) {
          console.log('click', params)
        })

        myChart.on('legendselectchanged', function (params) {
          console.log('legendselectchanged', params)
        })

        myChart.on('click', 'series.line', function (params) {
          console.log('click line', params)
        })

        myChart.on('mouseover', { seriesIndex: 1, name: 'xx' }, function (params) {
          console.log('mouseover', params)
        })
      },
      async getDataGraph() {
        const res = await DataGraph({})
        console.log(res)
        if (res.length !== 0) {
          const legendNames: string[] = []
          const xAxisData: string[] = []
          const seriesData: any[] = []
          let first: any[] = []
          let dataset: any[] = []
          Object.keys(res).forEach((element, i) => {
            if (i === 0) {
              first = res[element]
            }
            xAxisData.push(element)
            dataset = dataset.concat(dataset, res[element])
          })
          first.forEach((element: any) => {
            legendNames.push(element.Name)
          })
          console.log(97, dataset)
          legendNames.forEach((element: string) => {
            let groupData: any = {
              name: element,
              type: 'line',
              data: []
            }
            dataset.forEach((elem) => {
              if (element === elem.Name) {
                groupData.data.push(elem.Value)
              }
            })
            seriesData.push(groupData)
          })
          console.log(117, legendNames, xAxisData, seriesData)
          this.createECharts(legendNames, xAxisData, seriesData)
        }
      }
    },
    mounted() {
      this.getDataGraph()
      this.createEChartsGraph()
    }
  })
</script>

<style lang="scss" scoped>
  #main {
    height: 800px;
  }
  #test {
    height: 800px;
  }
</style>

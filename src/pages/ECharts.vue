<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <div id="main"></div>
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
      //   this.createECharts()
    }
  })
</script>

<style lang="scss" scoped>
  #main {
    height: 800px;
  }
</style>

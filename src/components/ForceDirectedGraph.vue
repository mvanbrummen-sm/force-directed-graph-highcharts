<template>
  <highcharts :options="mapOptions" class="graph"></highcharts>
</template>

<script>

export default {
  name: 'ForceDirectedGraph',
  data() {
    return {
      mapOptions: {
        chart: {
          type: 'networkgraph',
          height: '100%'
        },
        title: {
          text: 'SiteMinder JWT Permissions'
        },
        subtitle: {
          text: 'Authorization between components'
        },
        plotOptions: {
          networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
              enableSimulation: true,
              friction: -0.9
            }
          }
        },
        series: [{
          accessibility: {
            enabled: false
          },
          dataLabels: {
            enabled: true,
            linkFormat: ''
          },
          id: 'lang-tree',
          data: [
            ['cm-core-api', 'cm-bdc/hotel-api'],
            ['cm-core-api', 'cm-exp/hotel-api'],
            ['cm-core-api', 'cm/web'],
            ['cm-core-api', 'cm-channel-bridge/channel-api'],
            // leaves
            ['cm-bdc/hotel-gateway', 'cm-bdc/hotel-api'],
            ['cm-exp/hotel-gateway', 'cm-exp/hotel-api'],
            ['cm/web', 'cm-exp/hotel-api'],
            ['cm/web', 'cm-bdc/hotel-api'],
            ['cm-channel-bridge/channel-api', 'cm-exp/hotel-api'],
            ['cm-channel-bridge/channel-api', 'cm-bdc/hotel-api'],
          ]
        }]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graph {
  min-height: 500px;
}
</style>

<template>
  <highcharts :options="mapOptions" class="graph"></highcharts>
</template>

<script>
import Highcharts from 'highcharts';

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
  },
  beforeMount() {
    Highcharts.addEvent(
        Highcharts.Series,
        'afterSetOptions',
        function (e) {
          var colors = Highcharts.getOptions().colors,
              i = 0,
              nodes = {};

          if (
              this instanceof Highcharts.seriesTypes.networkgraph &&
              e.options.id === 'lang-tree'
          ) {
            e.options.data.forEach(function (link) {

              if (link[0] === 'cm-core-api') {
                nodes['cm-core-api'] = {
                  id: 'cm-core-api',
                  marker: {
                    radius: 20
                  }
                };
                nodes[link[1]] = {
                  id: link[1],
                  marker: {
                    radius: 10
                  },
                  color: colors[i++]
                };
              } else if (nodes[link[0]] && nodes[link[0]].color) {
                nodes[link[1]] = {
                  id: link[1],
                  color: nodes[link[0]].color
                };
              }
            });

            e.options.nodes = Object.keys(nodes).map(function (id) {
              return nodes[id];
            });
          }
        }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graph {
  min-height: 500px;
}
</style>

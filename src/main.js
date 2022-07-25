import {createApp} from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import * as networkgraphInit from 'highcharts/modules/networkgraph';

networkgraphInit(Highcharts)

const app = createApp(App)

app.use(HighchartsVue)
app.mount('#app')
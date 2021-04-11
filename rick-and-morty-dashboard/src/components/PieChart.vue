<template>
  <div class="containerDashboard">
    <h1>Statistics</h1>
    <h3>By species</h3>
    <apexchart :width="558" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'PieGraph',
  props: {
    data: Array,
  },
  computed: {
    series() {
      return this.data.map((item) => item.value);
    },
    chartOptions() {
      const labels = this.data.map((item) => item.label);
      return {
        chart: {
          width: 558,
          type: 'pie',
        },
        labels,
        dataLabels: {
          textAnchor: 'middle',
          formatter: (_, opt) => this.series[opt.seriesIndex],
        },
        theme: {
          theme: 'dark',
          monochrome: {
            enabled: true,
            color: '#e78b09',
            shadeTo: 'light',
          },
        },
      };
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
};

</script>

<style>

.containerDashboard{
   background-color:#e0e7ff;
   padding: 3%;
   width: 750px;
}
h1{
  margin: 0 ;
}

h3{
  margin: 0;
}

.apexcharts-tooltip {
  background: #000;
  color: #eee;
  border: none !important;
}
.apexcharts-tooltip-series-group {
  padding-bottom: 0 !important;
}

</style>

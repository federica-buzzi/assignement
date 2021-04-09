<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <PieChart
      :data="[
        { label: 'A', value: 60 },
        { label: 'B', value: 40 }
      ]"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PieChart from './components/PieChart.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PieChart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

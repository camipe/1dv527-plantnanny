<template>
  <div id="app">
    <h1>Plant Nanny</h1>
    <div class="live">

    </div>

    <div class="graphs">
      <h3>Sensor DHT22</h3>
      <Air :height="300"></Air>

      <h3>Sensor LM393</h3>
      <Soil :height="300"></Soil>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Air from './Air.vue';
import Soil from './Soil.vue';

export default {
  name: 'app',
  components: {
    Air,
    Soil
  },
}
</script>

<style>
.graphs {
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 80%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

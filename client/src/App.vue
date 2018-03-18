<template>
  <div id="app">
    
    <div class="graphs">
      <h3>DHT22</h3>
      <Air :data="airData.raw" :height="300"></Air>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Air from './Air.vue';
import Soil from './Air.vue';

export default {
  name: 'app',
  components: {
    Air,
    Soil
  },
  data () {
    return {
      airData: {
        raw: [],
        formatted: [],
      },
      soilData: {
        raw: [],
        formatted: [],
      },
      errors: [],
      example: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        datasets: [
          {
            label: 'Temperature (°C)',
            backgroundColor: '#0dafae',
            data: [21, 21, 26, 18, 20, 24, 21]
          },
          {
            label: 'Humidity (%)',
            backgroundColor: '#ac8885',
            data: [96, 34, 39, 40, 39, 28, 40]
          }
        ]
      },
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://raspy.pi:9090/api/v1/air`)
      this.airData.raw = response.data
    } catch (e) {
      this.errors.push(e)
      console.log(e);
    }

    try {
      const response = await axios.get(`http://raspy.pi:9090/api/v1/soil`)
      this.soilData.raw = response.data
    } catch (e) {
      this.errors.push(e)
      console.log(e);
    }
    
  },
  mounted() {
    this.formatSoildata();
  },
  methods: {
    formatSoildata () {
      console.log(this.soilData.raw);
      const last = this.soilData.raw.slice(-15);
      console.log(last);
    },
  }
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

<script>
import axios from 'axios';
import { Line, mixins } from 'vue-chartjs';
const { reactiveData } = mixins;

export default {
  extends: Line,
  mixins: [reactiveData],
  data () {
    return {
      chartData: null,
      errors: [],
        options: {
        responsive: true,
        legend: {
          display: true
        },
        layout: {
          padding: 10
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            gridLines: {
              display: true
            },
            ticks: {
            min: 0,
            max: 100,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options);
  },  
  async created() {
    try {
      const response = await axios.get(`http://raspy.pi:9090/api/v1/air`)

      const formatted = {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        datasets: [
          {
            label: 'Temperature (°C)',
            backgroundColor: '#0dafae',
            data: []
          },
          {
            label: 'Humidity (%)',
            backgroundColor: '#ac8885',
            data: []
          }
        ]
      };

      response.data.slice(-5).map((el) => {
        console.log(el)
        formatted.datasets[0].data.push(el.temperature)
        formatted.datasets[1].data.push(el.humidity)
      });
      console.log(formatted);
      this.chartData = formatted;

    } catch (e) {
      this.errors.push(e)
      console.log(e);
    }    
  },
}

</script>
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
      const response = await axios.get(`http://micaelpersson.asuscomm.com/api/v1/soil`)
      
      // setting up data object for chart
      const formatted = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00','07:00', '08:00', '09:00', '10:00', '11:00', 
                '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00','20:00', '21:00', '22:00', '23:00'],
        datasets: [
          {
            label: 'Soil moisture (%)',
            backgroundColor: '#5E2971',
            data: []
          },
        ]
      };

      // inserting data points in to data set
      response.data.slice(-24).map((el) => {
        formatted.datasets[0].data.push(el.value * 100);
      });
      this.chartData = formatted;

    } catch (e) {
      this.errors.push(e)
      console.log(e);
    }    
  },
}
</script>
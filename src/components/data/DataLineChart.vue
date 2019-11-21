<script>
import { Line } from "vue-chartjs";

export default {
  name: "DataLineChart",
  extends: Line,
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return{
      height:20
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "GitHub Commits",
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          backgroundColor:"#FFE0E6"
        },
        {
          label: "GitHub Commits1",
          data: [40, 90, 15, 39, 10, 40, 39, 80, 50, 20, 12, 11]
        }
      ]
    });
  },
  methods: {}
};
</script>

<style>
</style>
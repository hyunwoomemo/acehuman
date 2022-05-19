var ctx = document.getElementById("myChart");
var ctx1 = document.getElementById("myChart_1");

var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2022.01", "2022.02","2022.03","2022.04"],
    datasets: [
      {
        type: "bar",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        label: "매출액",
        data: [60, 49, 72, 90]
      },
      {
        type: "line",
        label: "목표액",
        data: [58, 50, 70, 80],
        lineTension: 0,
        fill: false
      },
      {
        type: "line",
        label: "예상 매출 금액",
        data: [10, 20, 30, 40],
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  }
});

var chart = new Chart(ctx1, {
  type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 60],      // 섭취량, 총급여량 - 섭취량
        backgroundColor: [
          '#9DCEFF',
          '#F2F3F6'
        ],
        borderWidth: 0,
        scaleBeginAtZero: true,
      }
    ]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  }
});
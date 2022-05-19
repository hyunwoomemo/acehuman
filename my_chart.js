var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
      label: '매출액',
      data: [5.2, 7.1, 6.7, 6.4],
      backgroundColor: 'cornflowerblue'
    }, {
      label: '목표액',
      data: [6.5, 6.5, 6.5, 6.5],
      type: 'line',
      borderColor: 'red'
    }],
    labels: ['January', 'February', 'March', 'April']
  },
});
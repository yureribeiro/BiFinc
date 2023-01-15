const ctx = document.getElementById('myChart');
  ctx.classList.add('chart')

 new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Dolar 1A 2022',
      data: [5.674, 5.242, 5.016, 4.690, 5.134, 4.989, 5.268, 5.085, 5.148, 5.191, 5.397, 5.312],
      borderWidth: 3,
      borderColor: 'rgba(107, 201, 177, 0.85)',
      backgroundColor: 'transparent',
      tension: 0.1,
      pointHoverBackgroundColor: 'white'
    },
    {
      label: 'Bitcoin 1A 2022',
      data: [42.694, 43.517, 39.433, 42.285, 31.004, 22.494, 19.302, 24.316, 21.639, 19.155, 17.547, 17.115],
      borderWidth: 3,
      borderColor: 'rgba(200, 340, 100, 0.85)',
      backgroundColor: 'transparent',
      tension: 0.1,
      pointHoverBackgroundColor: 'white'
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'RELATÓRIO ANUAL 2022',
        color: 'white',
        padding: {
          top: 10,
        },    
      }
    }}
});


export default ctx
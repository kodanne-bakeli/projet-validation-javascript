var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Febrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets: [{
            label: 'Earnings in $',
            data: [20, 40, 80, 80,],
            backgroundColor: [
                'rgba(32, 223, 127, 1)'
            ],
            borderColor: [
                'rgba(32, 223, 127, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});

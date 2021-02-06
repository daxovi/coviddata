var hospitalizovani = document.getElementById('hospitalizovaniChart').getContext('2d');
var hospitalizovaniChart = new Chart(hospitalizovani, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [{
            label: 'JIP',
            backgroundColor: 'rgb(255, 92, 111)',
            borderColor: 'rgb(255, 92, 111)',
            data: [45, 46, 47, 51, 47, 45, 44, 38, 38, 37, 35, 36, 31, 30, 28]
        },
        {
            label: 'Standardní',
            backgroundColor: 'rgb(99, 102, 202)',
            borderColor: 'rgb(99, 102, 202)',
            data: [82, 63, 64, 70, 66, 69, 59, 61, 60, 63, 69, 58, 56, 52, 45]
        }
        ]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        // aspectRatio: 1,
        legend: {
            labels: {
                boxWidth: 5,
                usePointStyle: true,
                fontColor: '#000',
            },
            // align: 'start',
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    autoSkip: true,
                    //maxTicksLimit: 10,
                    maxRotation: 0,
                    minRotation: 0,
                }
            }],
            yAxes: [{
                stacked: true
            }]
        },
    }
});
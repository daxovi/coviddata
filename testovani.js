var testovani = document.getElementById('testovaniChart').getContext('2d');
//testovani.height = 500;
var testovaniChart = new Chart(testovani, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [
            {
                label: 'PCR',
                backgroundColor: '#eca814',
                borderColor: '#eca814',
                data: [316, 1016, 643, 760, 630, 315, 1025, 955, 782, 614, 214, 1027, 862, 799, 661]
            },
            {
                label: 'antigenní',
                backgroundColor: '#d49200',
                borderColor: '#d49200',
                data: [260, 267, 254, 209, 241, 290, 287, 277, 262, 259, 303, 279, 291, 305, 310]
            }
        ]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        // aspectRatio: 1,
        legend: {
            labels: {
                boxWidth: 12,
                //usePointStyle: true,
                fontColor: '#394A59',
            },
            // align: 'start',
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false,
                },
                ticks: {
                    autoSkip: true,
                    //maxTicksLimit: 10,
                    maxRotation: 0,
                    minRotation: 0,
                    fontColor: '#394A59',
                }
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    color: '#f2f5f8',
                },
                ticks: {
                    fontColor: '#394A59',
                    //fontSize: '18',
                },
                
            }]
        },
    }
});
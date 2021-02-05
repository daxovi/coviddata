var testovani = document.getElementById('testovaniChart').getContext('2d');
var testovaniChart = new Chart(testovani, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [
            {
                label: 'PCR',
                backgroundColor: 'rgb(255, 99, 132, 0)',
                borderColor: 'rgb(57, 169, 53)',
                data: [316, 1016, 643, 760, 630, 315, 1025, 955, 782, 614, 214, 1027, 862, 799, 661]
            },
            {
                label: 'antigenní',
                backgroundColor: 'rgb(255, 99, 132,0)',
                borderColor: 'rgb(255, 150, 0)',
                data: [260, 267, 254, 209, 241, 290, 287, 277, 262, 259, 303, 279, 291, 305, 310]
            },
            {
                label: 'odběry',
                backgroundColor: 'rgb(255, 99, 132,0)',
                borderColor: 'rgb(92, 195, 237)',
                data: [102, 297, 292, 249, 233, 121, 233, 309, 227, 254, 84, 320, 325, 285, 242]
            }
        ]
    },

    // Configuration options go here
    options: {
        aspectRatio: 1,
    }
});
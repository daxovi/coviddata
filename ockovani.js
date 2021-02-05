var ockovani = document.getElementById('ockovaniChart').getContext('2d');
var ockovaniChart = new Chart(ockovani, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [
            {
                label: 'očkování',
                backgroundColor: 'rgb(255, 99, 132, 0)',
                borderColor: 'rgb(57, 169, 53)',
                data: [298, 397, 318, 312, 346, 192, 259, 323, 294, 210, 145, 483, 286, 450, 475]
            }
        ]
    },

    // Configuration options go here
    options: {
        aspectRatio: 1,
    }
});
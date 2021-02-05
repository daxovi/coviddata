var hospitalizovani = document.getElementById('hospitalizovaniChart').getContext('2d');
var hospitalizovaniChart = new Chart(hospitalizovani, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [{
            label: 'JIP pokoj',
            //backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 92, 111)',
            data: [45, 46, 47, 51, 47, 45, 44, 38, 38, 37, 35, 36, 31, 30, 28]
        },
        {
            label: 'Standardní pokoj',
            // backgroundColor: 'rgb(255, 236, 0)',
            borderColor: 'rgb(99, 102, 202)',
            data: [82, 63, 64, 70, 66, 69, 59, 61, 60, 63, 69, 58, 56, 52, 45]
        }
        ]
    },

    // Configuration options go here
    options: {
        aspectRatio: 1,
    }
});

var testovani = document.getElementById('testovaniChart').getContext('2d');
var testovaniChart = new Chart(testovani, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['17. 1.', '18. 1.', '19. 1.', '20. 1.', '21. 1.', '24. 1.', '25. 1.', '26. 1.', '27. 1.', '28. 1.', '31. 1.', '1. 2.', '2. 2.', '3. 2.', '4. 2.'],
        datasets: [
            {
                label: 'PCR testy',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(57, 169, 53)',
                data: [316, 1016, 643, 760, 630, 315, 1025, 955, 782, 614, 214, 1027, 862, 799, 661]
            },
            {
                label: 'Antigenní testy',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 150, 0)',
                data: [260, 267, 254, 209, 241, 290, 287, 277, 262, 259, 303, 279, 291, 305, 310]
            },
            {
                label: 'odběry',
                // backgroundColor: 'rgb(255, 99, 132)',
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
                // backgroundColor: 'rgb(255, 99, 132)',
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
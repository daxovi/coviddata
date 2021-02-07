datumy = datumy.reverse();
dataJip = dataJip.reverse();
dataStandardni = dataStandardni.reverse();
dataOckovani = dataOckovani.reverse();
dataPCR = dataPCR.reverse();
dataAntigenni = dataAntigenni.reverse();
dataOdbery = dataOdbery.reverse();

function vykresliHospitalizovani() {
    var hospitalizovani = document.getElementById('hospitalizovaniChart').getContext('2d');
    var hospitalizovaniChart = new Chart(hospitalizovani, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: datumy,
            datasets: [{
                label: 'JIP pokoj',
                backgroundColor: '#D04818',
                borderColor: '#D04818',
                data: dataJip,
            },
            {
                label: 'Standardní pokoj',
                backgroundColor: '#E69463',
                borderColor: '#E69463',
                data: dataStandardni,
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
}

function vykresliTestovani() {
    var testovani = document.getElementById('testovaniChart').getContext('2d');
    var testovaniChart = new Chart(testovani, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: datumy,
            datasets: [
                {
                    label: 'PCR testy',
                    backgroundColor: '#85AB28',
                    borderColor: '#85AB28',
                    data: dataPCR,
                },
                {
                    label: 'Antigenní testy',
                    backgroundColor: '#CACF00',
                    borderColor: '#CACF00',
                    data: dataAntigenni,
                },
/*                 {
                    label: 'odběry',
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(92, 195, 237)',
                    data: dataOdbery,
                } */
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
}

function vykresliOckovani() {
    var ockovani = document.getElementById('ockovaniChart').getContext('2d');
    var ockovaniChart = new Chart(ockovani, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: datumy,
            datasets: [
                {
                    label: 'očkování',
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(57, 169, 53)',
                    data: dataOckovani,
                }
            ]
        },

        // Configuration options go here
        options: {
            aspectRatio: 1,
        }
    });
}


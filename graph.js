datumy = datumy.reverse();
dataJip = dataJip.reverse();
dataStandardni = dataStandardni.reverse();
dataOckovani = dataOckovani.reverse();
dataPCR = dataPCR.reverse();
dataAntigenni = dataAntigenni.reverse();
dataOdbery = dataOdbery.reverse();

for (let i = 0; i < dataOckovani.length - 1; i++) {
    dataOckovani[i + 1] = dataOckovani[i] + dataOckovani[i + 1];
}
var pocetZobrazeni = 21;

function vyplnitDatum() {
    document.getElementById('datum').innerHTML = datumy[datumy.length - 1];
}

datumy = datumy.slice(datumy.length - pocetZobrazeni, datumy.length);
dataJip = dataJip.slice(dataJip.length - pocetZobrazeni, dataJip.length);
dataStandardni = dataStandardni.slice(dataStandardni.length - pocetZobrazeni, dataStandardni.length);
dataOckovani = dataOckovani.slice(dataOckovani.length - pocetZobrazeni, dataOckovani.length);
dataPCR = dataPCR.slice(dataPCR.length - pocetZobrazeni, dataPCR.length);
dataAntigenni = dataAntigenni.slice(dataAntigenni.length - pocetZobrazeni, dataAntigenni.length);
dataOdbery = dataOdbery.slice(dataOdbery.length - pocetZobrazeni, dataOckovani.length);


function vykresliHospitalizovani() {
    document.getElementById('soucet').innerHTML = dataJip[dataJip.length - 1] + dataStandardni[dataStandardni.length - 1];
    vyplnitDatum();
    var hospitalizovani = document.getElementById('hospitalizovaniChart').getContext('2d');
    var hospitalizovaniChart = new Chart(hospitalizovani, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: datumy,
            datasets: [{
                label: 'JIP lůžka',
                backgroundColor: 'rgb(0,0,0,0)',
                borderColor: '#D04818',
                data: dataJip,
            },
            {
                label: 'standardní lůžka',
                backgroundColor: 'rgb(0,0,0,0)',
                borderColor: '#588FD7',
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
                position: 'bottom',
                align: 'start',

            },
            scales: {
                xAxes: [{
                    stacked: false,
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
                    stacked: false,
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
    document.getElementById('soucet').innerHTML = dataPCR[dataPCR.length - 1] + dataAntigenni[dataAntigenni.length - 1];
    vyplnitDatum();
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
                    label: 'antigenní testy',
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
                position: 'bottom',
                align: 'start',
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
    document.getElementById('soucet').innerHTML = dataOckovani[dataOckovani.length - 1];
    vyplnitDatum();
    var ockovani = document.getElementById('ockovaniChart').getContext('2d');
    var ockovaniChart = new Chart(ockovani, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: datumy,
            datasets: [
                {
                    label: 'počet vakcinací',
                    backgroundColor: '#EFC728',
                    borderColor: '#ECA815',
                    data: dataOckovani,
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
                position: 'bottom',
                align: 'start',
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
                        //color: '#000000',
                        color: '#f2f5f8',
                    },
                    ticks: {
                        fontColor: '#394A59',
                        //fontSize: '18',
                        beginAtZero: false,
                        min: 150000
                    },

                }]
            },
        }
    });
}

function vykresliZamestnanci() {
    var zamestnanci = document.getElementById('zamestnanciChart').getContext('2d');
    vyplnitDatum();
    var ockovaniChart = new Chart(zamestnanci, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["očkovaní (v %)", "neočkovaní (v %)"],
            datasets: [
                {
                    label: 'očkování',
                    backgroundColor: ['#446FCB', '#B2CAD8'],
                    borderColor: '#fff',
                    data: dataZamestnanci,
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
                position: 'bottom',
                align: 'start',
            },
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,

                }]
            },
        }
    });
}


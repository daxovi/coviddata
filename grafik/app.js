var datum = datumy[0];

var pocetJIP = dataJip[0];
var pocetSTD = dataStandardni[0];

var testuPCR = dataPCR[0];
var testuANTI = dataAntigenni[0];

var odberu = dataOdbery[0];
var ockovani = dataOckovani[0];

function drawInstagram() {
    var canvas = document.getElementById('instagram');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var background = new Image();
        background.src = 'bg.jpg';
        background.onload = function () {
            ctx.drawImage(background, 0, 0, 1000, 1000);

            var rozmerImg = 200;
            var velkyTxt = '800 68px acumin-pro-condensed';
            var malyTxt = '500 32px acumin-pro-condensed';
            var tucnyTxt = '800 32px acumin-pro-condensed'

            ctx.font = velkyTxt;
            ctx.fillText(("COVID DATA FN OLOMOUC " + datum + " 2021").toUpperCase(), 50, 93);

            // hospitalizovani
            var hospImg = new Image();
            hospImg.src = 'hosp.png';
            hospImg.onload = function () {
                var dx = 50;
                var dy = 140;
                ctx.drawImage(hospImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((pocetJIP + pocetSTD + "").toUpperCase(), dx, dy + rozmerImg + 80);
                ctx.font = malyTxt;
                ctx.fillText("hospitalizovaných pacientů", dx, dy + rozmerImg + 125);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetJIP + ""), dx, dy + rozmerImg + 178);
                ctx.font = malyTxt;
                ctx.fillText("na JIP odděleních", dx + 8 + ctx.measureText(pocetJIP + "").width, dy + rozmerImg + 178);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetSTD + ""), dx, dy + rozmerImg + 228);
                ctx.font = malyTxt;
                ctx.fillText("na standardních odděleních", dx + 8 + ctx.measureText(pocetSTD + "").width, dy + rozmerImg + 228);


            }

            // testovani
            var testImg = new Image();
            testImg.src = 'test.png';
            testImg.onload = function () {
                var dx = 500;
                var dy = 140;
                ctx.drawImage(testImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((testuPCR + testuANTI + "").toUpperCase(), dx, dy + rozmerImg + 80);
                ctx.font = malyTxt;
                ctx.fillText("provedených testů", dx, dy + rozmerImg + 125);

                ctx.font = tucnyTxt;
                ctx.fillText((testuPCR + ""), dx, dy + rozmerImg + 178);
                ctx.font = malyTxt;
                ctx.fillText("PCR testů", dx + 8 + ctx.measureText(testuPCR + "").width, dy + rozmerImg + 178);

                ctx.font = tucnyTxt;
                ctx.fillText((testuANTI + ""), dx, dy + rozmerImg + 228);
                ctx.font = malyTxt;
                ctx.fillText("antigenních testů", dx + 8 + ctx.measureText(testuANTI + "").width, dy + rozmerImg + 228);
            }

            var pulka = 620;
            var odbImg = new Image();
            odbImg.src = 'odb.png';
            odbImg.onload = function () {
                var dx = 50;
                var dy = pulka;
                ctx.drawImage(odbImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((odberu + "").toUpperCase(), dx, dy + rozmerImg + 80);
                ctx.font = malyTxt;
                ctx.fillText("provedených odběrů", dx, dy + rozmerImg + 125);
            }

            var ockoImg = new Image();
            ockoImg.src = 'ocko.png';
            ockoImg.onload = function () {
                var dx = 500;
                var dy = pulka;
                ctx.drawImage(ockoImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((ockovani + "").toUpperCase(), dx, dy + rozmerImg + 80);
                ctx.font = malyTxt;
                ctx.fillText("očkování", dx, dy + rozmerImg + 125);
            }

        };
    }
}

function drawWeb() {
    var canvas = document.getElementById('web');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var background = new Image();
        background.src = 'sirokybg.jpg';
        background.onload = function () {
            ctx.drawImage(background, 0, 0, 1200, 550);

            var rozmerImg = 133;
            var velkyTxt = '800 54px acumin-pro-condensed';
            var malyTxt = '500 22px acumin-pro-condensed';
            var tucnyTxt = '800 22px acumin-pro-condensed';
            var polotucnyTxt = '700 22px acumin-pro-condensed';

            ctx.font = velkyTxt;
            ctx.fillText(("COVID DATA FN OLOMOUC " + datum + " 2021").toUpperCase(), 250, 72);

            // hospitalizovani
            var hospImg = new Image();
            hospImg.src = 'hosp.png';
            hospImg.onload = function () {
                var dx = 250;
                var dy = 105;
                ctx.drawImage(hospImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((pocetJIP + pocetSTD + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("hospitalizovaných", dx, dy + rozmerImg + 90);
                ctx.fillText("pacientů", dx, dy + rozmerImg + 118);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetJIP + ""), dx, dy + rozmerImg + 155);
                ctx.font = malyTxt;
                ctx.fillText("na JIP odděleních", dx + 8 + ctx.measureText(pocetJIP + "").width, dy + rozmerImg + 155);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetSTD + ""), dx, dy + rozmerImg + 198);
                ctx.font = malyTxt;
                ctx.fillText("na standardních", dx + 8 + ctx.measureText(pocetSTD + "").width, dy + rozmerImg + 198);
                ctx.fillText("odděleních", dx, dy + rozmerImg + 198 + 28);


            }

            // testovani
            var testImg = new Image();
            testImg.src = 'test.png';
            testImg.onload = function () {
                var dx = 439;
                var dy = 105;
                ctx.drawImage(testImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((testuPCR + testuANTI + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("provedených testů", dx, dy + rozmerImg + 90);

                ctx.font = tucnyTxt;
                ctx.fillText((testuPCR + ""), dx, dy + rozmerImg + 125);
                ctx.font = malyTxt;
                ctx.fillText("PCR testů", dx + 8 + ctx.measureText(testuPCR + "").width, dy + rozmerImg + 125);

                ctx.font = tucnyTxt;
                ctx.fillText((testuANTI + ""), dx, dy + rozmerImg + 160);
                ctx.font = malyTxt;
                ctx.fillText("antigenních", dx + 8 + ctx.measureText(testuANTI + "").width, dy + rozmerImg + 160);
                ctx.fillText("testů", dx, dy + rozmerImg + 160 + 28);
            }

            var pulka = 105;
            var odbImg = new Image();
            odbImg.src = 'odb.png';
            odbImg.onload = function () {
                var dx = 628;
                var dy = pulka;
                ctx.drawImage(odbImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((odberu + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("provedených odběrů", dx, dy + rozmerImg + 90);
            }

            var ockoImg = new Image();
            ockoImg.src = 'ocko.png';
            ockoImg.onload = function () {
                var dx = 817;
                var dy = pulka;
                ctx.drawImage(ockoImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((ockovani + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("očkování", dx, dy + rozmerImg + 90);

                ctx.font = malyTxt;
                ctx.fillStyle = "white";
                ctx.fillText("pro aktuální informace o testování a očkování ", 320, 540);

                ctx.font = polotucnyTxt;
                ctx.fillStyle = "white";
                ctx.fillText("klikněte na tento banner", 320 + ctx.measureText("pro aktuální informace o testování a očkování").width - 17, 540);

                ctx.fillStyle = "#fff";
                ctx.fillRect(668, 543, 198, 2);
            }



        };
    }
}


function drawFb() {
    var canvas = document.getElementById('fb');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        var background = new Image();
        background.src = 'sirokybg.jpg';
        background.onload = function () {
            ctx.drawImage(background, 0, 0, 1200, 550);

            var rozmerImg = 133;
            var velkyTxt = '800 54px acumin-pro-condensed';
            var malyTxt = '500 22px acumin-pro-condensed';
            var tucnyTxt = '800 22px acumin-pro-condensed';
            var polotucnyTxt = '700 22px acumin-pro-condensed';

            ctx.font = velkyTxt;
            ctx.fillText(("COVID DATA FN OLOMOUC " + datum + " 2021").toUpperCase(), 250, 72);

            // hospitalizovani
            var hospImg = new Image();
            hospImg.src = 'hosp.png';
            hospImg.onload = function () {
                var dx = 250;
                var dy = 105;
                ctx.drawImage(hospImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((pocetJIP + pocetSTD + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("hospitalizovaných", dx, dy + rozmerImg + 90);
                ctx.fillText("pacientů", dx, dy + rozmerImg + 118);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetJIP + ""), dx, dy + rozmerImg + 155);
                ctx.font = malyTxt;
                ctx.fillText("na JIP odděleních", dx + 8 + ctx.measureText(pocetJIP + "").width, dy + rozmerImg + 155);

                ctx.font = tucnyTxt;
                ctx.fillText((pocetSTD + ""), dx, dy + rozmerImg + 198);
                ctx.font = malyTxt;
                ctx.fillText("na standardních", dx + 8 + ctx.measureText(pocetSTD + "").width, dy + rozmerImg + 198);
                ctx.fillText("odděleních", dx, dy + rozmerImg + 198 + 28);


            }

            // testovani
            var testImg = new Image();
            testImg.src = 'test.png';
            testImg.onload = function () {
                var dx = 439;
                var dy = 105;
                ctx.drawImage(testImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((testuPCR + testuANTI + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("provedených testů", dx, dy + rozmerImg + 90);

                ctx.font = tucnyTxt;
                ctx.fillText((testuPCR + ""), dx, dy + rozmerImg + 125);
                ctx.font = malyTxt;
                ctx.fillText("PCR testů", dx + 8 + ctx.measureText(testuPCR + "").width, dy + rozmerImg + 125);

                ctx.font = tucnyTxt;
                ctx.fillText((testuANTI + ""), dx, dy + rozmerImg + 160);
                ctx.font = malyTxt;
                ctx.fillText("antigenních", dx + 8 + ctx.measureText(testuANTI + "").width, dy + rozmerImg + 160);
                ctx.fillText("testů", dx, dy + rozmerImg + 160 + 28);
            }

            var pulka = 105;
            var odbImg = new Image();
            odbImg.src = 'odb.png';
            odbImg.onload = function () {
                var dx = 628;
                var dy = pulka;
                ctx.drawImage(odbImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((odberu + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("provedených odběrů", dx, dy + rozmerImg + 90);
            }

            var ockoImg = new Image();
            ockoImg.src = 'ocko.png';
            ockoImg.onload = function () {
                var dx = 817;
                var dy = pulka;
                ctx.drawImage(ockoImg, dx, dy, rozmerImg, rozmerImg);

                ctx.font = velkyTxt;
                ctx.fillText((ockovani + "").toUpperCase(), dx, dy + rozmerImg + 60);
                ctx.font = malyTxt;
                ctx.fillText("očkování", dx, dy + rozmerImg + 90);

                ctx.font = malyTxt;
                ctx.fillStyle = "white";
                ctx.fillText("pro aktuální informace o testování a očkování ", 320, 540);

                ctx.font = polotucnyTxt;
                ctx.fillStyle = "white";
                ctx.fillText("klikněte na tento banner", 320 + ctx.measureText("pro aktuální informace o testování a očkování").width - 17, 540);

                ctx.fillStyle = "#fff";
                ctx.fillRect(668, 543, 198, 2);
            }



        };
    }
}
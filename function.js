btCalcular.addEventListener('click', calcular);
btLimpar.addEventListener('click', limpar);

function abc(n, somaX, somaY, somaX2, somaX3, somaX4, somaXY, somaX2Y) {
    console.log("chamou abc");
    var sxx = somaX2 - (Math.pow(somaX, 2) / n);
    var sxy = somaXY - ((somaX * somaY) / n);
    var sxx2 = somaX3 - ((somaX2 * somaX) / n);
    var sx2y = somaX2Y - ((somaX2 * somaY) / n);
    var sx2x2 = somaX4 - (Math.pow(somaX2, 2) / n);
    console.log("sxx: ", sxx, "sxy: ", sxy, "sxx2: ", sxx2, "sx2y: ", sx2y, "sx2x2: ", sx2x2);
    var a = ((sx2y * sxx) - (sxy * sxx2)) / ((sxx * sx2x2) - (Math.pow(sxx2, 2)));
    var b = ((sxy * sx2x2) - (sx2y * sxx2)) / ((sxx * sx2x2) - Math.pow(sxx2, 2));
    var c = (somaY / n) - (b * (somaX / n)) - (a * (somaX2 / n));
    console.log(a, b, c);
    return [a, b, c];
}

function coeficiente (vExpl, vNExpl) {
    console.log("chamou coeficiente");
    var r2 = vExpl / (vExpl + vNExpl);
    console.log(r2);
    return r2;
}

function calcular() {
    var valorX = document.getElementById("vX").value;
    var vetorX = valorX.split(" ").map(Number);
    var valorY = document.getElementById("vY").value;
    var vetorY = valorY.split(" ").map(Number);
    var n = vetorX.length;
    console.log(vetorX);
    console.log(vetorY);

    if (vetorX.length < 3) {
        document.getElementById("msgErroX").innerHTML = "<p class='erro'>Mínimo de 3 valores</p>";
    }
    else if (vetorX.length < 3) {
        document.getElementById("msgErroY").innerHTML = "<p class='erro'>Mínimo de 3 valores</p>";
    }
    else if (vetorX.length != vetorY.length) {
        document.getElementById("msgErro").innerHTML = "<p class='erro'>A quantidade de valores X e Y tem que ser iguais</p>";
    }
    else {

        document.getElementById("msgErroX").innerHTML = "";
        document.getElementById("msgErroY").innerHTML = "";
        document.getElementById("msgErro").innerHTML = "";

        var somaX = 0, somaY = 0, vetorX2 = [], somaX2 = 0, vetorX3 = [], somaX3 = 0, vetorX4 = [], somaX4 = 0, vetorXY = [], somaXY = 0, vetorX2Y = [], somaX2Y = 0;
        
        for (let i = 0; i < n; i++) {
            somaX += vetorX[i];
            somaY += vetorY[i];
            somaX2 += Math.pow(vetorX[i], 2);
            vetorX2[i] = Math.pow(vetorX[i], 2);
            somaX3 += Math.pow(vetorX[i], 3);
            vetorX3[i] = Math.pow(vetorX[i], 3);
            somaX4 += Math.pow(vetorX[i], 4);
            vetorX4[i] = Math.pow(vetorX[i], 4);
            somaXY += (vetorX[i] * vetorY[i]);
            vetorXY[i] = (vetorX[i] * vetorY[i]);
            somaX2Y += (vetorX2[i] * vetorY[i]);
            vetorX2Y[i] = (vetorX2[i] * vetorY[i]);
        }

        console.log("somaX: ", somaX, " somaY: ", somaY, " somaX2: ", somaX2, " somaX3: ", somaX3, " somaX4: ", somaX4, " somaXY: ", somaXY, " somaX2Y: ", somaX2Y);
        console.log("vetorX2: ", vetorX2);
        console.log("vetorX3: ", vetorX3);
        console.log("vetorX4: ", vetorX4);
        console.log("vetorXY: ", vetorXY);
        console.log("vetorX2Y: ", vetorX2Y);

        var [a, b, c] = abc(n, somaX, somaY, somaX2, somaX3, somaX4, somaXY, somaX2Y);
        console.log(a, b, c);
        vA = a, vB = b, vC = c;
        var somaYest, vetorYest = [], vExpl = 0, vNExpl = 0, mediaY = somaY / n;

        for (let i = 0; i < n; i++) {
            somaYest += (vA * Math.pow(vetorX[i], 2)) + (vB * vetorX[i]) + vC;
            vetorYest[i] = (vA * Math.pow(vetorX[i], 2)) + (vB * vetorX[i]) + vC;
            vExpl += Math.pow((vetorYest[i] - mediaY), 2);
            vNExpl += Math.pow((vetorYest[i] - vetorY[i]), 2);
        }

        console.log(vExpl, vNExpl);

        var r2 = coeficiente(vExpl, vNExpl);

        a = a.toFixed(2);
        b = b.toFixed(2);
        c = c.toFixed(2);

        if (a >= 0) {
            a = "+" + a;
        }
        if (b >= 0) {
            b = "+" + b;
        }

        document.getElementById("cap").innerHTML = "<h2 class='texto' id='expnum'>Resultados</h2>"

        document.getElementById("dados").innerHTML = "<p class='texto'>Y estimado:<br>ŷ = " + c + b + "x" + a + "x<sup>2</sup></p>";

        document.getElementById("dados").innerHTML += "<p class='texto'>Domínio = [" + vetorX[0] + ";" + vetorX[vetorX.length - 1] +"]<br>Coeficiente de determinação (r<sup>2</sup>) = " + (r2 *100).toFixed(2) + "</p>";

        document.getElementById("dados").innerHTML += "<p class='texto'>a = " + a + "<br>b = " + b + "<br>c = " + c;
    }
}

function limpar() {
    document.getElementById("vX").value = "";
    document.getElementById("vY").value = "";
    document.getElementById("somaN").innerHTML = "";
    document.getElementById("tabela").innerHTML = "";
    document.getElementById("dados").innerHTML = "";
    document.getElementById("msgErroX").innerHTML = "";
    document.getElementById("msgErroY").innerHTML = "";
    document.getElementById("msgErro").innerHTML = "";
}
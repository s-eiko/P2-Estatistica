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

    if (document.getElementById("vX").value == "") {
        document.getElementById("msgErroX").innerHTML = "<p class='erro'>Campo obrigatório</p>";
    }
    else if (document.getElementById("vY").value == "") {
        document.getElementById("msgErroY").innerHTML = "<p class='erro'>Campo obrigatório</p>";
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

        document.getElementById("somaN").innerHTML = "<p>A quantidade de elementos é: " + n + ".</p>";

        var intabela = "<table> <thead> <tr> <th>X</th> <th>Y</th> <th>XY</th> <th>X<span>2</span></th> <th>X<span>2</span>Y</th> <th>X<span>3</span></th> <th>X<span>4</span></th> </tr> </thead> <tbody>";

        for (let i = 0; i < n; i++) {
            intabela += "<tr> <td>" + vetorX[i] + "</td> <td>" + vetorY[i] + "</td> <td>" + vetorXY[i] + "</td> <td>" + vetorX2[i] + "</td> <td>" + vetorX2Y[i] + "</td> <td>" + vetorX3[i] + "</td> <td>" + vetorX4[i] + "</td> </tr>";
        }

        intabela += "</tbody> </table>"

        document.getElementById("tabela").innerHTML = intabela;

        document.getElementById("dados").innerHTML = "<p>O valor de A é: " + a + ". <br>O valor de B é: " + b + ". <br>O valor de c é: " + c + ". <br>O coeficiente de determinação é: " + r2 + ".</p>";
    }
}

function limpar() {
    document.getElementById("vX").value = "";
    document.getElementById("vY").value = "";
    document.getElementById("somaN").innerHTML = "";
    document.getElementById("tabela").innerHTML = "";
    document.getElementById("dados").innerHTML = "";
}
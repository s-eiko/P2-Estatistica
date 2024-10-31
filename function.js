btCalcular.addEventListener('click', calcular);

function abc(somaXY, somaX2, somaX2Y, n, mediaX, mediaY, somaY, somaX) {
    console.log("chamou abc");
    var sxx = somaX2 - (n * Math.pow(mediaX, 2));
    var sxy = somaXY - (n * mediaX * mediaY);
    var sx2y = somaX2Y - (n * Math.pow(mediaX, 2) * mediaY);
    var a = ((sx2y * sxx) - (sxy * somaX2)) / ((sxx * somaX2) - Math.pow(somaX2, 2));
    var b = ((sxy * somaX2) - (sx2y * somaX2)) / ((sxx * somaX2) - Math.pow(somaX2, 2));
    var c = (somaY / n) - (b * (somaX / n)) - (a * (somaX2 / n));
    console.log(a, b, c);
    return [a, b, c];
}

function equação(a, b, c, vetorY, vetorX, mediaY, n) {
    console.log("chamou equação");
    var sse = 0, sst = 0;
    for (i = 0; i < n; i++) {
        sse += Math.pow((vetorY[i] - (a * Math.pow(vetorX[i], 2)) - (b * vetorX[i] - c)), 2);
        sst += Math.pow((vetorY[i] - mediaY), 2);
    }
    var r = 1 - (sse / sst);
    var r2 = Math.pow(r, 2);
    console.log(r, r2);
    return [r, r2];
}

function calcular() {
    var valorX = document.getElementById("vX").value;
    var vetorX = valorX.split(" ").map(Number);
    var valorY = document.getElementById("vY").value;
    var vetorY = valorY.split(" ").map(Number);
    var n = vetorX.length;
    console.log(vetorX);
    console.log(vetorY);
    if (document.getElementById("vX").value = "") {
        msgErroX.innerHTML = "<p class='erro'>Campo obrigatório</p>";
    }
    else if (document.getElementById("vY").value = "") {
        msgErroY.innerHTML = "<p class='erro'>Campo obrigatório</p>";
    }
    else if (vetorX.length != vetorY.length) {
        msgErro.innerHTML = "<p class='erro'>A quantidade de valores X e Y tem que ser iguais</p>"
    }
    else {
        var somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0, somaX2Y = 0, somaX3 = 0, somaX4 = 0, vetorXY = [], vetorX2 = [], vetorX2Y = [], vetorX3 = [], vetorX4 = [];
        for (var i = 0; i < n; i++) {
            somaX += vetorX[i];
            somaY += vetorY[i];
            somaXY += vetorX[i] * vetorY[i];
            vetorXY.push(vetorX[i] * vetorY[i]);
            somaX2 += Math.pow(vetorX[i], 2);
            vetorX2.push(Math.pow(vetorX[i], 2));
            somaX2Y += Math.pow(vetorX[i], 2) * vetorY[i];
            vetorX2Y.push(Math.pow(vetorX[i], 2) * vetorY[i]);
            somaX3 += Math.pow(vetorX[i], 3);
            vetorX3.push(Math.pow(vetorX[i], 3));
            somaX4 += Math.pow(vetorX[i], 4);
            vetorX4.push(Math.pow(vetorX[i], 4));
        }
        var mediaX = somaX / n, mediaX2 = somaX2 / n, mediaY = somaY / n;
        var [a, b, c] = abc(somaX, somaY, somaXY, somaX2, somaX2Y, somaX3, somaX4, n, mediaX, mediaX2, mediaY, somaY, somaX);
        var [r, r2] = equação(resulabc.valorA, resulabc.valorB, resulabc.valorC, vetorY, vetorX, mediaY, n);
        console.log("retornou equação");
        somaN.innerHTML = "A quantidade de elementos é: " + n;
        for (var i = 0; i < vetorX.length; i++) {
            tabela.innerHTML += "<tr> <td>" + vetorX[i] + "</td> <td>" + vetorY[i] + "</td> <td>" + vetorXY[i] +"</td> <td>" + vetorX2[i] + "</td> <td>" + vetorX2Y[i] + "</td> <td>" + vetorX3[i] + "</td> <td>" + vetorX4[i] + "</td> </tr> <br>";
        }
        dados.innerHTML = "O valor de A é: " + a + ". O valor de B é: " + b + ".O valor de c é: " + c + ". <br>O coeficiente de correlação é: " + r + ". O coeficiente de determinação é: " + r2 + ".";
    }
}
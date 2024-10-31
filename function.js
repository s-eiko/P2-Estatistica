btCalcular.addEventListener('click', calcular);
btLimpar.addEventListener('click', limpar);

function abc(somaX, somaY, somaXY, somaX2, somaX2Y, somaX3, somaX4) {
    var mediaX = somaX * (1 / vetorX.length);
    var mediaX2 = somaX2 * (1 / vetorX.length);
    var mediaX22 = Math.pow(mediaX, 2);
    var mediaY = somaY * (1 / vetorX.length);
    var sxx = somaX2 * (1 / vetorX.length) - mediaX22;
    var sxy = somaXY * (1 / vetorX.length) - mediaX * mediaY;
    var sxx2 = somaX3 * (1 / vetorX.length) - mediaX * mediaX2;
    var sx2x2 = somaX4 * (1 / vetorX.length) - mediaX2 * mediaX2;
    var sx2y = somaX2Y * (1 / vetorX.length) - mediaX2 * mediaY;
    var comm = 1 / (sxx * sx2x2 - sxx2 * sxx2);
    var b = (sxy * sx2x2 - sx2y * sxx2) * comm;
    var c = (sx2y * sxx - sxy * sxx2) * comm;
    var a = mediaY - b * mediaX - c * mediaX2;
    return [a, b, c];
}

function equação(a, b, c) {
    var somaCima = 0, somaBaixo = 0;
    for (i = 0; i < vetorX.length; i++) {
        var x = [i, 1];
        var y = [i, 2];
        somaCima += Math.pow((y - (a + b * x + c * x * x)), 2);
        somaBaixo += Math.pow((y - mediaY), 2);
        var r = Math.sqrt(1 - somaCima / somaBaixo);
        var r2 = Math.pow(r, 2);
    }
    return [r, r2];
}

function calcular() {
    var valorX = document.getElementById("vX").value;
    var vetorX = valorX.split(" ");
    var valorY =  document.getElementById("vY").value;
    var vetorY = valorY.split(" ");
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
        var somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0, somaX2Y = 0, somaX3 = 0, somaX4 = 0, somaY2 = 0, vetorXY = [], vetorX2 = [], vetorX2Y = [], vetorX3 = [], vetorX4 = [], vetorY2 = [];
        for (var i = 0; i < vetorX.length; i++) {
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
            somaY2 += Math.pow(vetorY[i], 2);
            vetorY2.push(Math.pow(vetorY[i], 2));
        }
        var [a, b, c] = abc(somaX, somaY, somaXY, somaX2, somaX2Y, somaX3, somaX4);
        var [r, r2] = equação(a, b, c);
        somaN.innerHTML = "A quantidade de elementos é: " + vetorX.length;
        /* Linha */
        for (var i = 0; i < vetorX.length; i++) {
            tabela.innerHTML += "<tr>"
            /* Coluna */
            for (var i = 0; i < 8; i++) {
                tabela.innerHTML += "<td>" + vetorX[i] + "</td> <td>" + vetorY[i] + "</td> <td>" + vetorXY[i] +"</td> <td>" + vetorX2[i] + "</td> <td>" + vetorX2Y[i] + "</td> <td>" + vetorX3[i] + "</td> <td>" + vetorX4[i] + "</td> <td>" + vetorY2[i] + "</td>";
            }
            tabela.innerHTML += "</tr> <br>";
        }
        dados.innerHTML = "O valor de A é: " + a + ". O valor de B é: " + b + ".O valor de c é: " + c + ". <br>O coeficiente de correlação é: " + r + ". O coeficiente de determinação é: " + r2 + ".";
    }
}
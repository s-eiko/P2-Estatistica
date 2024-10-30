btCalcular.addEventListener('click', calcular);
btLimpar.addEventListener('click', limpar);

function calcular {
    var valorX = vX.value;
    var vetorX = valorX.split(',').join('');
    var valorY = vY.value;
    var vetorY = valorY.split(',').join('');
    if (vX.value = "") {
        msgErroX.innerHTML = "<p class='erro'>Campo obrigatório</p>";
    }
    else if (vY.value = "") {
        msgErroY.innerHTML = "<p class='erro'>Campo obrigatório</p>";
    }
    else if (vetorX.length != vetorY.length) {
        msgErro.innerHTML = "<p class='erro'>A quantidade de valores X e Y tem que ser iguais</p>"
    }
    else {
        var somaX = 0, somaY = 0, somaXY = 0, somaX2 = 0, somaX2Y = 0, somaX3 = 0, somaX4 = 0, somaY2 = 0, vetorXY[vetorX.length], vetorX2Y[vetorX.length], vetorX3[vetorX.length], vetorX4[vetorX.length], vetorY2[vetorX.length]; 
        for (var i = 0; i < vetorX.length; i++) {
            somaX += vetorX[i];
            somaY += vetorY[i];
            somaXY += vetorX[i] * vetorY[i];
            vetorXY[i] = vetorX[i] * vetorY[i];
            somaX2 += Math.pow(vetorX[i], 2);
            vetorX2[i] = Math.pow(vetorX[i], 2);
            somaX2Y += Math.pow(vetorX[i], 2) * vetorY[i];
            vetorX2Y
            somaX3 += Math.pow(vetorX[i], 3);
            somaX4 += Math.pow(vetorX[i], 4);
            somaY2 += Math.pow(vetorY[i], 2);
        }
        somaN.innerHTML = "A quantidade de elementos é: " + vX.length;
        for (var i = 0; i < vetorX.length; i++) {
            dados.innerHTML = "<tr>" + "<td>" + ve"</tr>"
        }
    }
}
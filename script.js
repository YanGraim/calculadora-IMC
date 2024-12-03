/* 
    Abaixo de 17 - Muito abaixo do peso
    Entre 17 e 18,49 - Abaixo do peso
    Entre 18,5 e 24,99 - Peso normal
    Entre 25 e 29,99 - Acima do peso
*/

// calcumo imc = peso/(altura*altura);

function calcular(event) {
    event.preventDefault();
    let resultado;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = peso/(altura*altura);
    if(imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc}</strong></p><p>Você está <strong>muito abaixo</strong> do peso</p>`
    }else if(imc > 17 && imc <= 18.49) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc}</strong></p><p>Você está <strong>abaixo</strong> do peso</p>`
    }else if(imc > 18.5 && imc <= 24.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc}</strong></p><p>Você está com o peso <strong>normal</strong></p>`
    } else {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc}</strong></p><p>Você está <strong>acima</strong> do peso</p>`
    }
}
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

    resultado = document.getElementById('resultado');

    if(imc < 17) {
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc.toFixed(2)}</strong>.</p><p>Você está <strong>muito abaixo</strong> do peso!</p>`
    }else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc.toFixed(2)}</strong>.</p><p>Você está <strong>abaixo</strong> do peso!</p>`
    }else if(imc > 18.5 && imc <= 24.99) {
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc.toFixed(2)}</strong>.</p><p>Você está com o peso <strong>ideal</strong>!</p>`
    } else if(imc > 25 && imc < 29.99) {
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc.toFixed(2)}</strong>.</p><p>Você está <strong>acima</strong> do peso!</p>`
    }else{
        resultado.innerHTML = `<p> Seu resultado foi: <strong>${imc.toFixed(2)}</strong>.</p><p>Cuidado <strong>obesidade</strong>!</p>`
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
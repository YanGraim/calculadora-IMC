/* 
    Abaixo de 17 - Muito abaixo do peso
    Entre 17 e 18,49 - Abaixo do peso
    Entre 18,5 e 24,99 - Peso normal
    Entre 25 e 29,99 - Acima do peso
*/

// calcumo imc = peso/(altura*altura);

function calcular(event) {
    event.preventDefault();
    
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;


    let imc = peso/(altura*altura);
    console.log(imc);
}
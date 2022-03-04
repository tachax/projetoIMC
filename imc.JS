/*
Cálculo do IMC:
IMC: Índice de Massa Corpórea
IMC = peso / (altura)²
- Menor que 18,5 = abaixo do normal
- Entre 18,5 e 24,9 = normal
- Entre 25,0 e 29,9 = sobrepeso
- Entre 30,0 e 39,9 = obesidade
- Maior ou igual a 40,0 = obesidade grave
*/


//função para calcular o IMC
function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    //parseFloat -> converte em número decimal

    let imc = peso / (altura * altura);
    let diagnostico = '';


    if (imc < 18.5) {
        diagnostico = 'Você está abaixo do normal';
    } else if ((imc >= 18.5) && (imc < 24.9)) {
        diagnostico = 'Você está normal';
    } else if ((imc >= 25) && (imc < 29.9)) {
        diagnostico = 'Você está com sobrepeso';
    } else if ((imc >= 30) && (imc < 39.9)) {
        diagnostico = 'Você está com obesidade';
    } else {
        diagnostico = 'Você está com obesidade grave';
    }

    //mostra os resultados na tela
    document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc;
    document.getElementById('descricaoResultado').innerHTML = 'Diagnostico: ' + diagnostico;
}


//função para limpar os dados da tela
function limpar() {
    document.getElementById('altura').value = 0;
    document.getElementById('peso').value = 0;
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('descricaoResultado').innerHTML = '';
}
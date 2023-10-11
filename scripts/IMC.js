//CÁLCULO DE MASA CORPORAL (Peso en Kg, Estatura en metros)

const IMC = function (peso, estatura) {
    let dieta;
    let imc = peso / (estatura * estatura)

    switch (true) {

        case imc < 16:
            dieta = 'delgadez severa'
            break;

        case imc >= 16 && imc < 18.49:
            dieta = 'delgadez'
            break;

        case imc >= 18.49 && imc <= 30:
            dieta = 'normal'
            break;

        case imc > 30 && imc < 35:
            dieta = 'sobrepeso'
            break;

        case imc >= 35 && imc < 40:
            dieta = 'obesidad'
            break;

        case imc >= 40:
            dieta = 'obesidad mórbida'
            break;

    }
    return [imc, dieta]
}
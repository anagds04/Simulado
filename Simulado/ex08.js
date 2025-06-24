/* Operação Matemática com Switch
Considere as variáveis:
let numero1 = 10;
let numero2 = 5;
let opcao = 3; // 1-somar, 2-subtrair, 3-multiplicar, 4-dividir

Usando switch, faça a operação de acordo com o valor de opcao e exiba o resultao. */

var  numero1 = 10;
var numero2 = 5;
var opcao = 3; // 1-somar, 2-subtrair, 3-multiplicar, 4-dividir
var resultado;

switch (opcao) {

    case "1":
        resultado = numero1 + numero2;
        console.log("Resultado da soma:" + resultado);
        break;

    case "2":
        resultado = numero1 - numero2;
        console.log("Resultado da subtração:" + resultado);
        break;

    case "3":
        resultado = numero1 * numero2;
        console.log("Resultado da multiplicação:" + resultado);
        break;

    case "4":
        resultado = numero1 / numero2;
        console.log("Resultado da divisão:" + resultado);
        break;
    default:
        console.log("Opção inválida")
}

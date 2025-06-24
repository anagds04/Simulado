/* Ex 10) Conversor de Moeda com Switch
Considere as variáveis:
let opcao = 2;
let valor = 100;

Usando switch, faça a conversão considerando:
● 1 → Dólar para Real (multiplicar por 5.00)
● 2 → Euro para Real (multiplicar por 5.40)
● 3 → Libra para Real (multiplicar por 6.20)

Exiba o valor convertido. */


let opcao = "2";
let valor = 100;

switch (opcao) {

    case "1":
        console.log("Valor * 5.00");
        break;

    case "2":
        console.log("Valor * 5.40");
        break;


    case "3":
        console.log("Valor * 6.20");
        break;

   
    default:
        console.log(" Opção inexistente.")
}
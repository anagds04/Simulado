/*Um algoritmo faz o seguinte:
● Começa com o número 1.
● A cada iteração, soma 3 ao número atual.
● Para quando o número for maior ou igual a 20.

Quantas vezes o loop será executado?*/

var num = 1;
var  count = 0;

while(num < 20) {
    num += 3;
    count++;
}

console.log("O loop foi executado " + count + " vezes.");


/*R: 7 vezes.* Números serão 1,4,7,10,13,16,19 ele para de contar quando atingir o número 20 ou ultrapassar.*/

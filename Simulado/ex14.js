/*Ex 14) Validação de Senha com While
Considere as variáveis:
let senhaCorreta = "senha123";
let tentativa = "senha123";

Utilize while para validar a senha:
● Enquanto tentativa for diferente de senhaCorreta, exiba "Senha incorreta".
● Quando for igual, exiba "Acesso liberado". */

let senhaCorreta = "senha123"
let tentativa = "senha123"


while(tentativa !== senhaCorreta) {
console.log("Senha Incorreta");
tentativa = "senha123";
}

console.log("Acesso Liberado");

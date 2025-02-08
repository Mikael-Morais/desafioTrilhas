// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.

/*let nome = "Mikael Yago";
console.log(nome);*/

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.

/*let idade = 25;
let altura = 1.75;
console.log(idade, altura);*/


// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.


/*let preco = 50;
let desconto = 0.2;
let precoDesconto = preco - (preco * desconto);
console.log(precoDesconto);*/

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".


/*let temperatura = 30;
if(temperatura > 25){
    console.log("Está calor!");
    }else{
        console.log("Está fresco!");
        }*/

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".


/*let idade = 18;
if(idade >= 18){
    console.log("Você é maior de idade");
    }else{
        console.log("Você é menor de idade");
        }*/


// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".

/*let nota = 9;
if(nota >= 7){
    console.log("Aprovado");
    }else if(nota >= 5 && nota < 7){
     console.log("Recuperação");
        }else{
            console.log("Reprovado");
            }*/


// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".

/*let num1 = 0;
let num2 = 21;
if(num1 == num2){
    console.log("Os números são iguais");
    }else{
        console.log("Os números são diferentes");
        }*/


// 8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.

/*let nome = "Mikael Yago";
let idade = 18;
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);*/


// 9. Crie um loop que imprima os números de 1 a 10 na tela.

/*for( let i = 1; i <= 10; i++){
    console.log(i);
}*/


// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.

/*let numero = 0;

while(numero != 5){
    numero = Number(prompt("Digite um número"));
    if(isNaN(numero)){
        console.log("Digite um número válido");
    }else{
        console.log("digite o numero 5 para encerrar o loop");
        }      
}
console.log("numero de encerração digitado")*/

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.

/*for(let i = 1; i <= 10; i++){
    let multiplicacao = 7 * i;
    console.log(`7 x ${i} = ${multiplicacao}`);
}*/


// 12. Crie um loop que exiba todos os números pares de 0 a 20.

/*for(let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}*/


// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

/*raio = Number(prompt("Digite o raio do círculo"));
area = calcularArea(raio);
console.log(area);
function calcularArea(raio){
    area = Math.PI*raio**2;
    return area;
}*/


// 14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.

// função para calcular a soma de dois valores
/*function calcularSoma(valor1, valor2){
    soma = valor1 + valor2;
    return soma;
}
// solicita ao usuário dois valores
let valor1 = Number(prompt("Digite o primeiro valor"));
let valor2 = Number(prompt("Digite o segundo valor"));

// chama a função calcularSoma e exibe o resultado

let resultado = calcularSoma(valor1, valor2);
console.log(resultado);*/


// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
// x = 10
// y = 20
// z = x+y
// console.log(z)

/*function calcularSoma(valor1, valor2){
    soma = valor1 + valor2;
    return soma;
}
let numero1 = 10;
let numero2 = 20;

resultado = calcularSoma(numero1,numero2);
console.log(resultado);*/
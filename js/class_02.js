// ----------------------------------------------------

function procedimento() {
    console.log("Essa function executa da mesma forma, porque não tem parâmetros.");
    console.warn("Essa function retorna nada.");
}

procedimento();
procedimento();
procedimento();

// ----------------------------------------------------

function welcome(nome) {
    console.log(typeof (nome));
    console.warn(`Welcome ${nome}`);
}

welcome("Arthur Estevan Vargas");
welcome(40);
welcome(true);
welcome(welcome);

// ----------------------------------------------------

function login(userName, password) {

    console.error(`Usuario ${userName} senha ${password} undefined`);
}

login("supwpy", 123);

// ----------------------------------------------------

function idade(idade) {

    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}

idade(19);

console.log(idade(19));

let resultado = idade(19);
console.log(resultado);

let concatenado = idade(10) + idade(20);

console.log(concatenado);

// ----------------------------------------------------

function media(nota1, nota2, nota3) {

    return (nota1 + nota2 + nota3) / 3
}

// ----------------------------------------------------

function situation(media) {

    return media >= 7 ? "Aproved" : "Reroved";
}

console.log(media(10, 10, 10));

console.log(situation(5));

console.log(
    situation(
        media(10, 10, 10)
    )
);


// ----------------------------------------------------

// Crie uma função para cada operação:

// SOMAR
// SUBTRAIR
// DIVIDIR
// MULTIPLICAR

// var number1 = prompt('Qual primeiro número?')
// var number2 = prompt('Qual segundo número?')

// function somar(a, b) {

//     let resultado = (Number(a) + Number(b));
//     return resultado
// }
// console.log(`${number1} + ${number2} = ` + somar(number1, number2));

// // ----------------------------------------------------

// function subtrair(a, b) {
  
//     let resultado = (Number(a) - Number(b));
//     return resultado
// }
// console.log(`${number1} - ${number2} = ` + subtrair(number1, number2));

// // ----------------------------------------------------

// function dividir(a, b) {

//     let resultado = (Number(a) / Number(b));
//     return resultado
// }
// console.log(`${number1} / ${number2} = ` + dividir(number1, number2));

// // ----------------------------------------------------

// function multiplicar(a, b) {

//     let resultado = (Number(a) * Number(b));
//     return resultado
// }
// console.log(`${number1} * ${number2} = ` + multiplicar(number1, number2));

// ----------------------------------------------------

function arrays() {

    console.log('Criando array: 1 - Let palavra = []');
    console.log('Criando array com itens: 1 - Let palavra = [itens, itens, itens]');

    let listaVazia = [];
    console.log(listaVazia);

    let nomes = ["Arthur", "Arthur", "Arthur", "Arthur"];
    console.log(nomes);

}

arrays();

// ----------------------------------------------------

function alerta(mensagem) {

    alert('BOOOOOOOOOOOOOOOOOOH')
}

// ----------------------------------------------------

var list = [];

function insertArray(novoNome) {
    
    list.push(novoNome);
    console.log(list);
}

// ----------------------------------------------------

function listar() {
    for(let contador = 0; contador < list.length; contador++) {
        console.log(`Repetindo com for ${contador} = ${list[contador]}`);
    }
    
    console.log("-----------------------------------------");

    for (const iterator of list) {
        console.log(`Repetindo com for inteligente, não conta o index ${iterator}`);
    }

    console.log("-----------------------------------------");

    list.forEach(element => {
        console.log(`Repetindo com forEach, não conta o index ${element}`);
    });
}
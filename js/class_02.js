// ----------------------------------------------------

// Aqui apenas instacio uma function, contendo console e warn

// function procedimento() {
//     console.log("Essa function executa da mesma forma, porque não tem parâmetros.");
//     console.warn("Essa function retorna nada.");
// }

// procedimento();
// procedimento();
// procedimento();

// ----------------------------------------------------

// Aqui instacio uma function com parâmetros, contendo console, typeof(que mostra qual tipo de parâmetro eu tenho ex: string, number etc...)

// function welcome(nome) {
//     console.log(typeof (nome));
//     console.warn(`Welcome ${nome}`);
// }

// welcome("Arthur Estevan Vargas");
// welcome(40);
// welcome(true);
// welcome(welcome);

// ----------------------------------------------------

// Aqui instacio um function simulando um login

// function login(userName, password) {

//     console.error(`Usuario ${userName} senha ${password} undefined`);
// }

// login("supwpy", 123);

// ----------------------------------------------------

// Aqui instacio uma function contendo uma lógica para me retorna devido dado

// function idade(idade) {

//     if (idade < 18) {
//         return "Menor de idade"
//     } else {
//         return "Maior de idade"
//     }
// }

// posso apenas passar o valor (não vai me mostrar o retorno porque não coloco para exibir)
// idade(19);

// aqui vai exibir o retorno porque adiciono a function em um log
// console.log(idade(19));

// aqui atribuo o valor da function a uma variavel, depois mostro 
// let resultado = idade(19);
// console.log(resultado);

// também posso concatenar os valores da minhas functions
// let concatenado = idade(10) + idade(20);
// console.log(concatenado);

// ----------------------------------------------------

// // function que serve para tirar a média
// function media(nota1, nota2, nota3) {

//     return (nota1 + nota2 + nota3) / 3
// }

// ----------------------------------------------------

// function usando operador ternario para mostrar resultado da média
// function situation(media) {

//     return media >= 7 ? "Aproved" : "Reroved";
// }

// capturando a média
// console.log(media(10, 10, 10));

// chamando o método situation
// console.log(situation(5));

// passando para function situation a function media
// console.log(
//     situation(
//         media(10, 10, 10)
//     )
// );


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


// ========================================== INSERINDO ARRAYS ========================================== //


// aprendendo a criar arrays
function arrays() {

    console.log("");

    console.log('====================================================================');

    console.log("Abaixo deixo como são os passo para criar uma array vazia e uma contendo itens:");

    console.log("");

    console.log('Criando array: ');
    console.log("1. - Let palavra = []");

    // instanciando array vazia
    let listaVazia = [];
    console.log(listaVazia);

    console.log("");

    console.log('Criando array com itens: ');
    console.log("1 - Let palavra = [itens, itens, itens]");

    // instanciando array com itens
    let nomes = ["Arthur", "Arthur", "Arthur", "Arthur"];
    console.log(nomes);

    console.log("");

}

// arrays();

// ========================================== APRENDENDO 'CLICK' ========================================== //

function paragrafo01() {

    console.log('====================================================================');
    console.log("Abaixo é apenas um texto demostrando quando usamos a função onclick em Html:");

    console.log("");

    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam recusandae nisi a unde ratione corporis totam laboriosam iure odio!");
}

function paragrafo02() {

    console.log('====================================================================');
    console.log("Abaixo é apenas um texto demostrando quando usamos a função onmouseover em Html:");

    console.log("");

    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam recusandae nisi a unde ratione corporis totam laboriosam iure odio!");
}

function paragrafo03() {

    console.log('====================================================================');
    console.log("Abaixo é apenas um texto demostrando quando usamos a função onload em Html:");
    console.log("(onload sempre que a página iniciar vai ser carregado)");

    console.log("");

    console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam recusandae nisi a unde ratione corporis totam laboriosam iure odio!");
}


// ========================================== CAPTURANDO VALORES PARA ARRAY ========================================== //


// usando uma function para atribuir valor a um array
function insertArray() {

    var list = [];
    let palavra = document.getElementById('palavra').value;

    for (let count = 0; count < 5; count++) {
        list.push(palavra)
    }

    console.log('====================================================================');
    console.log("Abaixo podemos conferir a inserção de dados na nossa array que vem do Html:");

    console.log("");

    console.log(list);
}

// ========================================== LISTANDO ARRAY COM FORs ========================================== //

var list = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto", "Sétimo", "Oitavo", "Nono", "Décimo"];

// listando array com for
function listando01() {

    console.log('====================================================================');
    console.log("Abaixo listamos com for simples que já utilizamos em Java:");

    // for simples que usamos em java
    for (let contador = 0; contador < list.length; contador++) {
        console.log(`Repetindo com for ${contador} = ${list[contador]}`);
    }
}

function listando02() {

    console.log('====================================================================');
    console.log("Abaixo listamos com um for inteligente:");

    // for inteligente ele não conta o index apenas mostra os itens
    for (const iterator of list) {
        console.log(`Repetindo com for inteligente, não conta o index: ${iterator}`);
    }
}

function listando03() {

    console.log('====================================================================');
    console.log("Abaixo listamos com um for each que já utilizamos em Java:");

    // foreach que aprendemos em java também 
    list.forEach(element => {
        console.log(`Repetindo com forEach, não conta o index: ${element}`);
    });
}


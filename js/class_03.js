
// ========================= APRENDENDO LER ELEMENTOS =========================

console.log('====================================================================');

console.warn(`Aprendendo Read`);

console.log("");

let leitura = document.getElementById('ler-paragrafo');

// Mostra todo o elemento incluindo suas tags de abertura e fechamento
console.log(leitura);

console.log("");

// Apenas lê o elemento
console.log(`Lendo parágrago com textContent => ${leitura.textContent}`);

console.log("");

// Lê o elemento além de ler também tag internas
console.log(`Lendo parágrafo com innerHtml => ${leitura.innerHTML}`);

console.log('====================================================================');

// ========================= APRENDENDO ESCREVER ELEMENTOS =========================

console.warn(`Aprendendo Write`);

let escrevendo = document.getElementById('escrevendo-paragrafo')

console.log("");

// Aqui defino um título pro meu elemento
escrevendo.title = "Helloooooooo";

// Aqui alteramos o conteúdo de um elemento
escrevendo.textContent = `Em JavaScript, existem várias propriedades que podem ser usadas para acessar e modificar o conteúdo de tags html, ou
seja, textContent, innerText e innerHTML.A propriedade textContent retorna todo o texto contido por um elemento / nó e
todos os seus descendentes, incluindo espaços e texto oculto CSS, exceto as tags.`

console.log("");

// ========================= LENDO ELEMENTOS COM FOR =========================

console.log('====================================================================');

console.warn(`Lendo com Foreach`);

console.log("");

let paragrafo = [...document.getElementsByTagName("p")]

console.log(`Lendo todos os parágrados usando foreach =>`, paragrafo);

paragrafo.forEach(element => {
  console.log(element.innerHTML);
});

console.log('====================================================================');

// ========================= UTILIZANDO FUNCTION PARA ALTERAR ELEMENTOS =========================

function mudar_texto() {

  document.getElementById('alterando').innerHTML = "Então se fez luz."

}

function texto_original() {

  document.getElementById('alterando').innerHTML = "No princípio era apenas escuridão..."
  
}

// ========================= UTILIZANDO FUNCTION PARA ADICIONAR ELEMENTOS =========================

function add_text() {

  let texto = document.getElementById('texto').value;

  let enter = document.createElement('br')

  document.body.append(enter)

  let elemento = document.createElement('div')

  elemento.textContent = texto;

  document.body.append(elemento);

}



console.warn(`Read`);
let leitura = document.getElementById('ler-paragrado');
console.log(leitura);
console.log(`textContent => ${leitura.textContent}`);
console.log(`innerHtml ${leitura.innerHTML}`);

let leitura_teste = document.getElementById('leitura_teste');
console.log(leitura_teste.textContent);
console.log(leitura_teste.innerHTML);

console.log(`Read Warn`);
let paragrafo = [...document.getElementsByTagName("p")]
console.log(`Lendo todos os parágrados =>`, paragrafo);

paragrafo.forEach(element => {
    console.log(element.innerHTML);
});

console.log('Write');
let escrita = document.getElementById('ler-paragrado')
escrita.title = "www.google.com";
escrita.textContent = "Esse paragrafo foi escrito com JavaScript"

console.log('Testando Js')
let comandos = document.getElementById('teste-1')
comandos.textContent = "Verdade é verdade?"

function mudar_texto(conteudo) {

  let elemento = document.getElementById('teste-1');
  elemento.title = conteudo;
  elemento.textContent = conteudo;
}

function add_text(conteudo) {

    let enter = document.createElement('br')
    
    document.body.append(enter)

    let elemento = document.createElement('div')

    elemento.textContent = conteudo;

    document.body.append(elemento);

}


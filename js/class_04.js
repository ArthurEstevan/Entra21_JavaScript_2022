// ========================= APRENDENDO LER ELEMENTOS =========================

console.log('====================================================================');

console.group("Read Subjects with Jquery")
 
console.log($(`#paragrafo_1`));

// com text() eu consigo ler que é o mesmo que document.HTMLinner()
console.log($(`#paragrafo_1`).text());

console.groupEnd()

console.log('====================================================================');

console.group("Altern Subjects with Jquery")

// com text("conteúdo") eu consigo escrever dentro da minha tag que é o mesmo que textContent
console.log($(`#paragrafo_2`).text(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima officia odio aut recusandae deleniti ab hic, 
                                    illum odit asperiores, maiores beatae ut. Exercitationem sed similique repellendus vel tempora animi natus.`));

console.groupEnd()

console.log('====================================================================');

console.group("Reading a lot of Subjects with Jquery")

let list = $("p");
console.log(list);
console.log(list.text());

$(`p`).each(function () {
    console.log(this.textContent);
})

console.groupEnd()

console.log('====================================================================');

console.group("Writing a lot of Subjects with Jquery")

$("li").text("Escrevendo em Li")

console.groupEnd()

console.log('====================================================================');

console.group("Creating elements with Jquery")

$("<button>", {text: `click here`, class: `btn btn-outline-dark`}).appendTo("#paragrafo_3")

$("#paragrafo_3").append (
    $("<br>"),
    $("<b>", {text: "Texto negrito"}),
    ("<br>"),
    $("<i>", {text: "Texto negrito"}),
)

console.groupEnd()

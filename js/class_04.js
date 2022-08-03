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

// ========================= APRENDENDO ESCREVER ELEMENTOS =========================

console.log('====================================================================');

console.group("Reading a lot of Subjects with Jquery")

// listando todos os meus paragrafos encontrado no html
let list = $("p");
console.log(list);
console.log(list.text());

$(`p`).each(function () {
    console.log(this.textContent);
})

console.groupEnd()

// ========================= APRENDENDO ESCREVER VÁRIOS ELEMENTOS =========================

console.log('====================================================================');

console.group("Writing a lot of Subjects with Jquery")

// escreve dentro da li mas são todos os li iguais
$("li").text("Escrevendo em Li")

console.groupEnd()

console.log('====================================================================');

console.group("Creating elements with Jquery")

// adicionando o button
$("<button>", { text: `click here`, class: `btn btn-outline-dark` }).appendTo("#paragrafo_3")

// adicionando texto
$("#paragrafo_3").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    ("<br>"),
    $("<i>", { text: "Texto negrito" }),
)

console.groupEnd()

// ========================= APRENDENDO ESCREVER ITENS UNITARIOS ELEMENTOS =========================

console.log('====================================================================')

console.group(`More itens JQuery`)

// lista com conteúdos diferentes nas li
$("<ul>").append(
    $("<li>", {
        text: "First iten"
    }),
    $("<li>", {
        text: "Second iten"
    }),
    $("<li>", {
        text: "Third iten"
    }),
).appendTo("#paragrafo_3")

console.groupEnd()

// ========================= APRENDENDO TABELA =========================

console.log('====================================================================')

console.group(`Exercise writen more iten`)

// criando uma tabela apenas com JQuery
$("<table>", {class: "table table-dark table-striped table-bordered table-hover"}).append(

    $("<Thead>", {class: "bg-dark"}).append(

        $("<th>", { text: "dia" }), 
        $("<th>", { text: "mês" }), 
        $("<th>", { text: "ano" })
        
        ),

    $("<Tbody>").append(

        $("<tr>").append(

        $("<td>", { text: "27" }), 
        $("<td>", { text: "12" }), 
        $("<td>", { text: "2002" }),
        
        ),

        $("<tr>").append(

        $("<td>", { text: "27" }), 
        $("<td>", { text: "12" }), 
        $("<td>", { text: "2002" })
        
        ),

        $("<tr>").append(

        $("<td>", { text: "27" }), 
        $("<td>", { text: "12" }), 
        $("<td>", { text: "2002" })
        
        ),
    )

).appendTo("#tabela")

console.groupEnd()

// ========================= APRENDENDO ON CLICK =========================

console.log('====================================================================')

console.group(`Click Events in qualquer place`)

// $("p").on("click", function() {
//     alert("Opa!")
// })

// $("li").on("click", function() {
//     console.warn("Opa! opa!");
// })

$("#ok").on("click", function() {
    alert("It's ok")
})

console.groupEnd()

// ========================= EXERCISE =========================

console.log('====================================================================')
console.group(`Exercise`)


// Exercise
// colocar um button para inserir um elemento qualquer ( alert("Alô") )

$("#add").on("click", () => {
    $("<p>", {text: `Nesse card você consegue ver diversas funcionalidade do JQuery, por exemplo: escrever tabelas, criar este parágrafo, onclick em formato de function e diversas outras coisas.Você pode ver com mais detalhes no aquirvo de .js todo esse processo acontecendo
                     aqui só a function é chamada através do scrip.
                     Lembrando que o array fica visível apenas no console`, 
                    class: "alert alert-danger"}).appendTo("#paragrafo_5")
})

$("#clean").on("click", () => {
    $(".alert").remove()
})


console.groupEnd()



// $.ajax()

// $.ajax(
//    {

//    }
// )

$("#meu-ip").on("click", () => {

    $.ajax({
        url: "https://httpbin.org/ip",
        type: "get",
        success: (retorno) => {
            console.log(`Funcionando`, retorno);
        },
        error: (motivo) => {
            console.warn(`Error`, motivo);
        },
    });
});

$("#movie").on("click", () => {

    $.ajax({
        url: "https://httpbin.org/get?nome=rubem&aula=javascript%20com%20ajax",
        type: "get",
        success: (retorno) => {
            console.log(`Funcionando`, retorno.args);
        },
        error: (motivo) => {
            console.warn(`Error`, motivo);
        },
    });
});

$("#delay").on("click", () => {
    // console.log("Normal", encodeURI("https://httpbin.org/delay/10")),
    // console.log("Normal", encodeURI("https://httpbin.org/delay/10"));
    
    // "https://httpbin.org/get?nome=Arthur&aula=javascript%20com%20ajax"
    // acima consigo passar váriaveis após ?

    let number = $("#tempo").val()

    $.ajax({
        type: "get",
        url: encodeURI("https://httpbin.org/delay/"+number),
        success: (retorno) => {
            console.log(`Funcionando`, retorno);
        },
        error: (motivo) => {
            console.warn(`Error`, motivo);
        },
    });
});


$("#post").on("click", () => {


    var objeto = {
        
        nome: $("#nome").val(),
        email: $("#email").val(),

    };


    $.ajax( {

        url: encodeURI("https://httpbin.org/post"),

        type: "post",

        header: {

           'Accept': "aplication/json",
            'Content-type': "aplication/json"
        },

        data: JSON.stringify(objeto),

        success: (dados) => {
            console.log("Funciona", dados);
        },

        error: (erro) => {
            console.log("Error", erro);
        }

    })

})

$("#busca").on("click", () => {

    console.log("Iniciando Busca");
    let chave = $("#pokemon").val();

    $.ajax({
        url: encodeURI("https://pokeapi.co/api/v2/pokemon/"+chave),
        type: "get",

        success: (retornor) => {
            console.log("Funcionou", retornor.nome);
        },
        error: (error) => {
            console.log("Error", error);
        }
    })
})

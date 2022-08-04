// hide oculta os itens que eu passar, nesse caso o botão de update
$("#update").hide();

// declaração das minhas váriaveis
var pessoas = [];
var update = null;

// function
escreverTabela();

// 1° vou cancelar o refresh de página feito pelo submit
$("form").on("submit", function (event) {
    event.preventDefault();
    // ---------------------------------------------

    // 2° declaração da minha váriavel responsavel pela captura de dados
    let dados = obterDados();
    // ---------------------------------------------

    // 3° criando lógica de inserção de dados e update 
    if ($("#add").is(":visible")) {

        pessoas.push(dados);
        // se o botão add estiver visível adiciona os dados

        console.log("added");
    } else {

        pessoas[pessoas.indexOf(update)] = dados;
        $("#add").toggle();
        $("#update").toggle();
        // se o botão update estiver visível faz update dos dados

        console.log("update");
    }

    escreverTabela();

    $("#clean").click();
});

// fazendo lógica de cancelar o update
$("#clean").on("click", () => {

    // ao clicar em clean add volta a aparecer
    $("#add").show();

    // ao clicar em clean update volta a desaparecer
    $("#update").hide();
});



function obterDados() {

    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let cidade = $("#cidade").val();

    return {
        nome: nome,
        idade: idade,
        cidade: cidade,
    };
};

function escreverTabela() {
    $("tbody").empty();

    pessoas.forEach((pessoa) => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", { text: pessoa.nome }),
                $("<td>", { text: pessoa.idade }),
                $("<td>", { text: pessoa.cidade }),
                $("<td>").append(
                    $("<button>", {
                        text: "Edit",
                        class: "btn btn-outline-primary me-2",
                        click: () => {
                            update = pessoa;
                            $("#nome").val(pessoa.nome);
                            $("#idade").val(pessoa.idade);
                            $("#add").toggle();
                            $("#update").toggle();
                        },
                    }),
                    $("<button>", {
                        text: "Delete",
                        class: "btn btn-outline-danger",
                        click: () => {
                            pessoas.splice(pessoas.indexOf(pessoa), 1);
                            escreverTabela();
                        }
                    })
                )
            )
        );
    });
}
function gerador_Numeros() {

    let gerador = Math.floor(Math.random() * 150);
    return gerador;

}

// ===================== START OF CARD ONE ===================== //
$("#natureza").on("click", () => {

    let url = gerador_Numeros();

    $("#imagem-one").addClass("rotate-vert-center")

    setTimeout(() => {
        $.ajax({

            url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + url),
            type: "get",

            success: (retorno) => {
                console.log("Funcionando", retorno);

                $("#imagem-one").hide(),

                    $("#card-one").empty().append(
                        $("<div>", { class: "" }).append(
                            $("<img>", { src: retorno.sprites.versions["generation-v"]["black-white"].animated.front_default, style: "width: 224px; height: 224px" })
                        ),
                    ),

                    $("#info-one").append(
                        $("<p>", { class: "mt-4 text-left fonte1", text: "Name: " + retorno.name }),
                        $("<p>", { class: "text-left fonte1", text: "ID: " + retorno.id }),
                        $("<p>", { class: "text-left fonte1", text: "HP: " + retorno.height }),
                    )
            },

            error: (motivo) => {
                console.log("Error", motivo);
            }
        })
    }, 800);
});
// ===================== END OF CARD ONE ===================== //

// ===================== START OF CARD TWO ===================== //
$("#terra").on("click", () => {

    let url = gerador_Numeros();

    $("#imagem-two").addClass("rotate-vert-center")

    setTimeout(() => {
        $.ajax({

            url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + url),
            type: "get",

            success: (retorno) => {
                console.log("Funcionando", retorno);

                $("#imagem-two").hide(),

                    $("#card-two").empty().append(
                        $("<div>", { class: "" }).append(
                            $("<img>", { src: retorno.sprites.versions["generation-v"]["black-white"].animated.front_default, style: "width: 224px; height: 224px" })
                        ),
                    ),

                    $("#info-two").append(
                        $("<p>", { class: "mt-4 text-left fonte1", text: "Name: " + retorno.name }),
                        $("<p>", { class: "text-left fonte1", text: "ID: " + retorno.id }),
                        $("<p>", { class: "text-left fonte1", text: "HP: " + retorno.height }),
                    )
            },

            error: (motivo) => {
                console.log("Error", motivo);
            }
        })
    }, 800);
});
// ===================== END OF CARD TWO ===================== //

// ===================== START OF CARD THREE ===================== //
$("#fogo").on("click", () => {

    let url = gerador_Numeros();

    $("#imagem-three").addClass("rotate-vert-center")

    setTimeout(() => {
        $.ajax({

            url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + url),
            type: "get",

            success: (retorno) => {
                console.log("Funcionando", retorno);

                $("#imagem-three").hide(),

                    $("#card-three").empty().append(
                        $("<div>", { class: "" }).append(
                            $("<img>", { src: retorno.sprites.versions["generation-v"]["black-white"].animated.front_default, style: "width: 224px; height: 224px" })
                        ),
                    ),

                    $("#info-three").append(
                        $("<p>", { class: "mt-4 text-left fonte1", text: "Name: " + retorno.name }),
                        $("<p>", { class: "text-left fonte1", text: "ID: " + retorno.id }),
                        $("<p>", { class: "text-left fonte1", text: "HP: " + retorno.height }),
                    )
            },

            error: (motivo) => {
                console.log("Error", motivo);
            }
        })
    }, 800);
});
// ===================== END OF CARD THREE ===================== //

// ===================== START OF CARD FOUR ===================== //
$("#vento").on("click", () => {

    let url = gerador_Numeros();

    $("#imagem-four").addClass("rotate-vert-center")

    setTimeout(() => {
        $.ajax({

            url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + url),
            type: "get",

            success: (retorno) => {
                console.log("Funcionando", retorno);

                $("#imagem-four").hide(),

                    $("#card-four").empty().append(
                        $("<div>", { class: "" }).append(
                            $("<img>", { src: retorno.sprites.versions["generation-v"]["black-white"].animated.front_default, style: "width: 224px; height: 224px" })
                        ),
                    ),

                    $("#info-four").append(
                        $("<p>", { class: "mt-4 text-left fonte1", text: "Name: " + retorno.name }),
                        $("<p>", { class: "text-left fonte1", text: "ID: " + retorno.id }),
                        $("<p>", { class: "text-left fonte1", text: "HP: " + retorno.height }),
                    )
            },

            error: (motivo) => {
                console.log("Error", motivo);
            }
        })
    }, 800);
});
// ===================== END OF CARD FOUR ===================== //

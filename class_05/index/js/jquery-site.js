
// =============================== CSS ===============================//
$("body").addClass("container")
$("body").addClass("background-main")
$("img").addClass("bloco")


// =============================== START OF NAVBAR ===============================//
$("<header>", { class: "row mt-3" }).append(

    $("<section>", { class: "col" }).append(

        $("<div>", { class: "card" }).append(

            $("<div>", { class: "card-body" }).append(

                $("<nav>", { class: "navbar navbar-expand-lg" }).append(

                    $("<div>", { class: "container-fluid" }).append(

                        $("<img>", { src: "icons/javascript.png" }),

                        $("<a>", { class: "navbar-brand ms-2", href: "https://github.com/ArthurEstevan/Entra21_JavaScript_2022", target: "_blank", text: "JQuery" }),

                        $("<button>", { class: "navbar-toggler", type: "button" }).append(

                            $("<span>", { class: "navbar-toggler-icon" })
                        ),

                        $("<div>", { class: "collapse navbar-collapse", id: "navbarText" }).append(

                            $("<ul>", { class: "navbar-nav me-auto mb-2 mb-lg-0" }).append(
                                $("<li>", { class: "nav-item" }).append(
                                    $("<a>", { class: "nav-link", href: "/index.html", text: "Home" })
                                ),
                                $("<li>", { class: "nav-item" }).append(
                                    $("<a>", { class: "nav-link", href: "/class_05/index/index.html", text: "JQuery" })
                                ),
                                $("<li>", { class: "nav-item" }).append(
                                    $("<a>", { class: "nav-link", href: "/class_05/class.html", text: "Icrud" })
                                ),
                            ),

                            $("<span>", { class: "navbar-text" }).append(

                                $("<a>", { target: "_blank", class: "me-3", href: "https://www.instagram.com/arthur.estevan/" }).append(
                                    $("<img>", { src: "/icons/github.png", alt: "GitHub" })
                                ),

                                $("<a>", { target: "_blank", class: "me-3", href: "https://www.linkedin.com/in/arthur-estevan-vargas-189208223/" }).append(
                                    $("<img>", { src: "/icons/linkedin.png", alt: "Linkedin" })
                                ),

                                $("<a>", { target: "_blank", class: "me-3", href: "https://mail.google.com/mail/u/0/?fs=1&to=arthur.estevan01@gmail.com&su=Contato+-+via+perfil+github&body=Ol%C3%A1+Arthur+Tudo+bem?&tf=cm" }).append(
                                    $("<img>", { src: "/icons/gmail.png", alt: "Gmail" })
                                ),

                                $("<a>", { target: "_blank", class: "me-3", href: "https://www.instagram.com/arthur.estevan/" }).append(
                                    $("<img>", { src: "/icons/instagram.png", alt: "Instagram" })
                                )
                            )
                        )
                    )

                )
            )
        ),
    )
).appendTo("body")
// =============================== END OF NAVBAR ===============================//

// =============================== START OF MAIN ===============================//
$("<main>", { class: "row mt-5" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(

            $("<div>", { class: "card-header" }).append(

            ),

            $("<div>", { class: "card-body m-4" }).append(

                $("<div>", { class: "" }).append(


                    $("<h1>", { text: "Learning JQuery", class: "bloco mb-3" }).append(
                        $("<img>", { src: "/icons/learning.png", class: "float-start me-2" })
                    ),
                ),

                $("<p>", {
                    text:
                        `
                According to the book jQuery: JavaScript programmer's library, by Maurício Samy Silva, it is intended to make web pages more interactive, in addition to allowing the creation of scripts that enrich the user experience.
                `
                }),
                $("<p>", {
                    text:
                        `
                As it is open source, access to the jQuery library is free and its base is constantly being improved by a community of developers from all over the world, who add plugins, scripts and extensions to make the codes more and more functional. Therefore, the jQuery library can be used in personal and professional projects, without restriction.
                `
                }),
                $("<p>", {
                    text:
                        `
                The purpose of jQuery is to increment lines of code from the JavaScript programming language, but not in a way that adds complexity. The library, on the contrary, simplifies what would have to be written with strings, lines and more lines of code in JavaScript.
                `
                }),
                $("<p>", {
                    text:
                        `
                A simple effect on an HTML page that would require complex JavaScript code can be replaced by a single line in jQuery syntax. This simplicity of application makes the library preferred by experienced programmers, but also by designers and developers with little programming knowledge.
                `
                }),

                $("<h2>", { text: "Instructions for Using JQuery", class: "mt-5" }).append(
                    $("<img>", { src: "/icons/instrucoes.png", class: "float-start me-2" })
                ),

                $("<p>").append(
                    $("<nav>").append(
                        $("<ol>").append(
                            $("<li>", { text: "Added JQuery library in body:" }).append(

                                $("<br>"),

                                $("<a>", { text: "JQuery", href: "https://releases.jquery.com/" }),
                                $("<span>", { text: "⇽ cdn website link" }),

                                $("<br>"),

                                $("<a>", { text: "Documentation", href: "https://api.jquery.com/" }),
                                $("<span>", { text: "⇽ read the documentation" }),
                            ),

                            $("<br>"),

                            $("<li>", { text: "You can now type your code in .js using the JQuery library." })
                        )
                    )
                ),

                $("<h2>", { text: "About the Class", class: "mt-5" }).append(
                    $("<img>", { src: "/icons/icon_conceito.png", class: "float-start me-2" })
                ),
                $("<p>", {
                    text: `This site was developed to archive the javascript classes that we are learning at Entra21, it
                                 also contains exercises that I developed during the holidays. This home page is just to
                                 replicate the readme that it contains on github, for more details check git.`}),

            ),
            $("<div>", { class: "card-footer" }),
        )
    )
).appendTo("body")
// =============================== END OF MAIN ===============================//




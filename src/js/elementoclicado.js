function pegarElementoClicado() {

    var elementoclicado;
    var titulos = document.querySelectorAll(".titulos");
    titulos.forEach(element => {
        element.addEventListener("click", function() {
            var divPai = document.querySelectorAll(".divPai");
            divPai.forEach(subElemento => {
                return subElemento.querySelector(".conteudo");
            });
        });
    });
}
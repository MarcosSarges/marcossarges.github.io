$(function() {
    $(".titulos").hover(
        function() {
            $(this).css("color", "#2e0");
        },
        function() {
            $(this).css("color", "#fff");
        }
    )
});

// var aberto = false;
// $(".titulos").click(function() {
//     // var cont = $(".conteudo").next();
//     var id = pegarElementoClicado();
//     if (aberto) {
//         $(id).slideUp();
//         aberto = !aberto;
//     } else {
//         $(id).slideDown();
//         aberto = !aberto;
//     }
// });
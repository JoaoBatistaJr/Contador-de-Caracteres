$(document).on("input", ".contador", function () {
 var limite = 100;
 var caracteresDigitados = $(this).val().length;
 var caracteresRestantes = limite - caracteresDigitados;

 $(".caracteres").text(caracteresRestantes);
});
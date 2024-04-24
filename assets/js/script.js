$(document).ready(function(){

    let num1 = 0;
    let num2 = 0;
    let resultado = 0;

    $("#resultado").css("color","red");
    $("#resultado").css("font-size","1.2rem");
    $("#resultado").hide();

    $("h1").click(function(){
        $(this).text("hola");
     });

     $("#btnSumar").click( function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
             $("#error1").text("debe agregar el primer numero");
             $("#error1").css("color", "red");
             return;
        }
        if($("#numero2").val() === ""){
             $("#error2").text("debe agragar el segundo numero");
             $("#error2").css("color", "red");
             return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;

        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnLimpiar").click(function(){
        $("#numero1");
        $("#numero2");
    });

});



//let idChile = document.getElementById("idChile");
//idChile.addEventListener("click", function(){
//   idChile.innerHTML = "me como los melones hasta con pepa"
//})


//let resultado = document.getElementById("resultado");
//        resultado.style.display = "none";
//        resultado.style.display = "block";
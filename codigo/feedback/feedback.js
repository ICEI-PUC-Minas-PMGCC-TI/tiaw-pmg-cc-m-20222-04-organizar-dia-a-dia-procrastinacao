function respostasfeedback(){ 
    var form6Example5 = document.getElementById("form6Example5");
    var form6Example6 = document.getElementById("form6Example6");
    var form6Example7 = document.getElementById("form6Example7");
    var form6Example8 = document.getElementById("form6Example8");

    var respostas = JSON.parse(localStorage.getItem("respostasform"));

    if(respostas == null){

        localStorage.setItem("respostasform", "[]");
        respostas = [];
    }

    var auxRegistro = {
        email: form6Example5.value,
        numero: form6Example6.value,
        mensagem: form6Example7.value,
        checkbox: form6Example8.value
    }

    respostas.push(auxRegistro);

    localStorage.setItem("respostasform", JSON.stringify(respostas))

}
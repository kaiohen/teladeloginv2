function esqueciminhasenha(){
   var email= prompt(" Confirme seu email:");
    if(email === null){
        alert(" Cancelado.");
    } else 
    if(email === "") {
        alert(" Inválido.");
    } else
    if (isValidEmail(email)) {
        alert("O email" + email + " recebeu um email para a redefinição de senha.");
    } else {
        alert("O email " + email + " é invalido.");
    }
}
function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function Cadastrar() {
    window.location.href = "cadastro.html";
  }
   function continuar() {
    window.location.href = "login.html";
  }
  function validarFormulario() {
    var email = document.getElementById("exampleInputEmail1").value;
    var senha = document.getElementById("exampleInputPassword1").value;

    if (email.trim() === "" || senha.trim() === "") { 
        alert("Por favor, preencha todos os campos."); 
        return false; 
    }

    return true;
}
function continuar() {
    var email = document.getElementById("exampleInputEmail1").value;
    var senha = document.getElementById("exampleInputPassword1").value;

    if (email.trim() === "" || senha.trim() === "") { 
        alert("Por favor, preencha todos os campos."); 
    } else {
        alert("Campos preenchidos! Você pode prosseguir.");
    }
}

function validateForm() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else{
        window.location.href = "entrar.html";
    }

    
}
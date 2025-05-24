document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "adm" && password === "adm") {
        alert("Login bem-sucedido!");
        window.location.href = "https://gaelbsgg.github.io/Construtech/home";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
});

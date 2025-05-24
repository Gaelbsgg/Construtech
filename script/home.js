// Mostrar/esconder menu lateral
document.getElementById("menuButton").addEventListener("click", function () {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
        sideMenu.classList.toggle("visible");
    }
});

// Exibir nome de usuário no dashboard
window.onload = function () {
    const username = sessionStorage.getItem("username");
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay) {
        usernameDisplay.textContent = username || "Usuário";
    }
};

// Botões para mostrar/ocultar iframes
document.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const iframe = document.getElementById(targetId);
        if (!iframe) return;

        const isVisible = iframe.style.display === "block";

        // Ocultar todos os iframes antes de mostrar o selecionado
        document.querySelectorAll(".iframe-container iframe").forEach((frame) => {
            frame.style.display = "none";
        });

        if (!isVisible) {
            iframe.style.display = "block";
            button.textContent = button.textContent.replace("Mostrar", "Ocultar");
        } else {
            iframe.style.display = "none";
            button.textContent = button.textContent.replace("Ocultar", "Mostrar");
        }

        // Atualiza os outros botões para "Mostrar"
        document.querySelectorAll(".toggle-button").forEach((btn) => {
            if (btn !== button) {
                btn.textContent = btn.textContent.replace("Ocultar", "Mostrar");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    // Enviar mensaje por WhatsApp solo con el formulario
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const phone = "51956895281"; // WhatsApp
        const text = encodeURIComponent(
            `Hola Angel, soy ${name} (${email}).\nMensaje: ${message}`
        );

        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

        form.reset();
    });

    // Copiar correo desde el texto al lado
    const emailSpan = document.querySelector(".copy-email");
    emailSpan.addEventListener("click", function() {
        navigator.clipboard.writeText(emailSpan.textContent)
            .then(() => alert("Correo copiado al portapapeles"))
            .catch(() => alert("Error al copiar el correo"));
    });
});

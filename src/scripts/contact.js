// src/scripts/contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const emailSpan = document.querySelector(".copy-email");
  
  // === Crear contenedor del toast ===
  const toastContainer = document.createElement("div");
  toastContainer.className =
    "fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end";
  document.body.appendChild(toastContainer);

  // === Función para mostrar toast ===
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `
      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white 
      shadow-lg backdrop-blur-md border transition-all duration-500 opacity-0 
      ${
        type === "success"
          ? "bg-green-500/40 border-green-400/60"
          : "bg-red-500/40 border-red-400/60"
      }
    `;
    toast.innerHTML = `
      <i class="bx ${
        type === "success" ? "bx-check-circle" : "bx-error-circle"
      } text-xl"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Animación de entrada
    setTimeout(() => (toast.style.opacity = "1"), 50);

    // Desaparece después de 3 segundos
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }

  // === Manejo del formulario ===
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Gracias por tu mensaje 💌", "success");
      form.reset();
    });
  }

  // === Copiar correo al portapapeles ===
  if (emailSpan) {
    emailSpan.addEventListener("click", () => {
      navigator.clipboard
        .writeText(emailSpan.textContent.trim())
        .then(() => showToast("Correo copiado al portapapeles 📋", "success"))
        .catch(() => showToast("Error al copiar el correo", "error"));
    });
  }
});

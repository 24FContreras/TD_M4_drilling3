console.log("🟢 Connected!");

const formulario = document.querySelector("#formulario");
const copies = document.querySelectorAll(".copies");
const destinatario = document.querySelector("#destinatario");
const titulo = document.querySelector("#titulo");
const mensaje = document.querySelector("#mensaje");
const remitente = document.querySelector("#remitente");

const mostrarMensaje = (
  destinatario,
  remitente,
  titulo,
  mensaje,
  ...copias
) => {
  console.log(
    `PARA: ${destinatario}
TÍTULO: ${titulo}
MENSAJE: ${mensaje}
FROM: ${remitente}`
  );

  for (const item of copias) {
    if (item.value) {
      console.log(`CC: ${item.value}`);
    }
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!destinatario.value.trim()) {
    alert(`Debes llenar el campo ${destinatario.name}`);
    destinatario.focus();
    return;
  }

  if (!titulo.value.trim()) {
    alert(`Debes llenar el campo ${titulo.name}`);
    titulo.focus();
    return;
  }

  if (!mensaje.value.trim()) {
    alert(`Debes llenar el campo ${mensaje.name}`);
    mensaje.focus();
    return;
  }

  if (!remitente.value.trim()) {
    alert(`Debes llenar el campo ${remitente.name}`);
    remitente.focus();
    return;
  }

  mostrarMensaje(
    destinatario.value,
    remitente.value,
    titulo.value,
    mensaje.value,
    ...copies
  );
});


/**
 * Muestra un modal reutilizable con título, mensaje, tipo y texto de botón.
 * @param {Object} opciones - Opciones para personalizar el modal.
 * @param {string} opciones.titulo - Título del modal.
 * @param {string} opciones.mensaje - Mensaje que se mostrará dentro del modal.
 * @param {string} opciones.tipo - Tipo de modal: info, advertencia o exito.
 * @param {string} opciones.textoBoton - Texto del botón para cerrar el modal.
 */
function mostrarModal(opciones) {
    const titulo = opciones.titulo || "Mensaje";
    const mensaje = opciones.mensaje || "Contenido del modal";
    const tipo = opciones.tipo || "info";
    const textoBoton = opciones.textoBoton || "Cerrar";

    const fondo = document.createElement("div");
    fondo.classList.add("modal-fondo");

    const caja = document.createElement("div");
    caja.classList.add("modal-caja");
    caja.classList.add("modal-" + tipo);

    caja.innerHTML = `
        <h2>${titulo}</h2>
        <p>${mensaje}</p>
        <button onclick="cerrarModal()"> ${textoBoton} </button>
    `;

    fondo.appendChild(caja);
    document.body.appendChild(fondo);

    console.log("Modal abierto:", titulo);
}

/**
 * Cierra el modal que se encuentra activo en pantalla.
 */
function cerrarModal() {
    const modal = document.querySelector(".modal-fondo");

    if (modal) {
        modal.remove();
        console.log("Modal cerrado correctamente");
    }
}
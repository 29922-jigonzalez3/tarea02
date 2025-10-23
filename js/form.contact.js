/* Bonton de envio */
const send = document.getElementById('send');


function validar() {

    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Expresión regular para el correo
    const expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    // Validar correo
    if (!expresion.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    // Validar teléfono (10 dígitos y solo números)
    if (phone.length !== 10 || isNaN(phone)) {
        alert("El número de teléfono debe tener exactamente 10 dígitos numéricos.");
        return false;
    }

    return true;
}

// Función para manejar el envío y deshabilitar el botón
function send_data(event) {

    event.preventDefault(); 

    if (!validar()) {
        return;
    }

    send.disabled = true;
    send.value = "Enviando datos ........";

    setTimeout(() => {
        alert("Datos enviados con éxito.");
        send.form.submit();
    }, 3000);


}
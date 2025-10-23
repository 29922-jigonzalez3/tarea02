/* Checkbox de Propietario y Terceros */
const owner = document.getElementById('owner');
const third_parties = document.getElementById('third-parties');

/* Boton Enviar Datos */
const send_data = document.getElementById('send-data');

/* Contenedor de Informacion Confidencial */
const container_confidential_info = document.getElementById('container-confidential-info');

const confidential_info = document.getElementById('confidential-info');
/* Boton Guardar */
const save = document.getElementById('save');

/* Funcion para habilitar Boton Enviar Datos si el checkbox de Propiertario esta marcado */
owner.addEventListener('change', function() {
    if (this.checked) {
        send_data.disabled = false;
        third_parties.checked = false;
        container_confidential_info.style.display = 'none';
    } else {
        send_data.disabled = true;
    }
});

/* Funcion para mostrar el formulario de Informacion Confidencial si el checkbox de Terceros esta marcado */
third_parties.addEventListener('change', function() {
    if (this.checked) {
        owner.checked = false;
        send_data.disabled = true;
        container_confidential_info.style.display = 'block';
    } else {
        container_confidential_info.style.display = 'none';      
    }

});

/* Funcion para guardar la Informacion Confidencial y habilitar el Boton Enviar Datos */
confidential_info.addEventListener('submit', function(event) {
    event.preventDefault();
    container_confidential_info.style.display = 'none'; 
    send_data.disabled = false;
});



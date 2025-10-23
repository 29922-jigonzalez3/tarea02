/* Boton para subir una foto */
const inputFile = document.getElementById('photo');
const botonFoto = document.getElementById('boton-foto');

/* Contenedor de la previsualización */
const preview = document.getElementById('preview');

/* Boton para borrar la foto */
const clear_photo = document.getElementById('clear-data');

/* Evento para el botón de subir foto y previsualización */
inputFile.addEventListener('change', () => {
    const file = inputFile.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => {
            preview.innerHTML = `<img src="${e.target.result}">`;
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '<p>El archivo no es una imagen válida</p>';
    }
});

/* Evento para borrar la foto del contenedor */
clear_photo.addEventListener('click', () => {
    inputFile.value = '';
    preview.innerHTML = '<p>No hay foto seleccionada</p>';
});
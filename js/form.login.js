/* Botones para alternar entre formularios */
const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');

/* Formularios */
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Mostrar formulario de inicio de sesión
btnLogin.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    btnRegister.style.backgroundColor = 'gray';
    btnLogin.style.backgroundColor = '#00703c';
});

// Mostrar formulario de registro
btnRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    btnLogin.style.backgroundColor = 'gray';
    btnRegister.style.backgroundColor = '#00703c';
});
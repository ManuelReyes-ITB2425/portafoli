document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");

    // Variable para rastrear la posición anterior al desplazarse
    let previousScrollPosition = window.pageYOffset;

    // Ocultar o mostrar el menú al desplazarse
    window.addEventListener("scroll", function () {
        const currentScrollPosition = window.pageYOffset;

        if (previousScrollPosition > currentScrollPosition) {
            // Desplazamiento hacia arriba - mostrar el menú
            nav.style.top = "0";
        } else {
            // Desplazamiento hacia abajo - ocultar el menú
            nav.style.top = "-100px"; // Ajusta según la altura del menú
        }

        // Actualiza la posición anterior
        previousScrollPosition = currentScrollPosition;
    });

    // Añadir clase 'active' al menú con un efecto al cargar la página
    setTimeout(() => {
        nav.classList.add("active");
    }, 500); // Ajusta el retraso según lo que necesites
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const telefonoError = document.getElementById('telefonoError');

    // Función para establecer color de los errores
    function setErrorColor(element, errorMessage, isValid, inputElement) {
        if (isValid) {
            element.textContent = ''; // Eliminar mensaje de error
            element.style.color = 'black'; // Texto en negro si es válido
            inputElement.classList.remove('error');
            inputElement.classList.add('success');
        } else {
            element.textContent = errorMessage; // Mostrar mensaje de error
            element.style.color = 'red'; // Texto en rojo si es inválido
            inputElement.classList.remove('success');
            inputElement.classList.add('error');
        }
    }

    // Validar el campo "Nombre y Apellidos"
    nombreInput.addEventListener('blur', function() {
        const nombreValue = nombreInput.value.trim();
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        if (nombreValue && !nombreRegex.test(nombreValue)) {
            setErrorColor(nombreError, 'El nombre solo debe contener letras y espacios.', false, nombreInput);
        } else if (!nombreValue) {
            setErrorColor(nombreError, 'El nombre es obligatorio.', false, nombreInput);
        } else {
            setErrorColor(nombreError, '', true, nombreInput);
        }
    });

    // Validar el campo "Correo Electrónico"
    emailInput.addEventListener('blur', function() {
        const emailValue = emailInput.value.trim();
        let emailValidationMessage = '';

        if (emailValue && !emailValue.includes('@')) {
            setErrorColor(emailError, 'Falta el símbolo "@" en el correo electrónico.', false, emailInput);
        } else if (emailValue && !emailValue.includes('.')) {
            setErrorColor(emailError, 'Falta el dominio o el ".com".', false, emailInput);
        } else if (emailValue && !emailValue.endsWith('.com')) {
            setErrorColor(emailError, 'El correo electrónico debe terminar en ".com".', false, emailInput);
        } else if (!emailValue) {
            setErrorColor(emailError, 'El correo electrónico es obligatorio.', false, emailInput);
        } else {
            setErrorColor(emailError, '', true, emailInput);
        }
    });

    // Validar el campo "Teléfono"
    telefonoInput.addEventListener('blur', function() {
        const telefonoValue = telefonoInput.value.trim();
        const telefonoRegex = /^[0-9]+$/;

        if (telefonoValue && !telefonoRegex.test(telefonoValue)) {
            setErrorColor(telefonoError, 'El teléfono solo debe contener números.', false, telefonoInput);
        } else if (!telefonoValue) {
            setErrorColor(telefonoError, 'El teléfono es obligatorio.', false, telefonoInput);
        } else {
            setErrorColor(telefonoError, '', true, telefonoInput);
        }
    });

    // Validar el formulario antes de enviarlo
    form.addEventListener('submit', function(event) {
        const nombreValue = nombreInput.value.trim();
        const emailValue = emailInput.value.trim();
        const telefonoValue = telefonoInput.value.trim();

        let isValid = true;

        // Validar Nombre
        if (!nombreValue || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreValue)) {
            setErrorColor(nombreError, 'El nombre es obligatorio y solo debe contener letras y espacios.', false, nombreInput);
            isValid = false;
        }

        // Validar Email
        if (!emailValue || !emailValue.includes('@') || !emailValue.includes('.') || !emailValue.endsWith('.com')) {
            setErrorColor(emailError, 'El correo electrónico debe ser válido, incluyendo "@", dominio y ".com".', false, emailInput);
            isValid = false;
        }

        // Validar Teléfono
        if (!telefonoValue || !/^[0-9]+$/.test(telefonoValue)) {
            setErrorColor(telefonoError, 'El teléfono debe contener solo números.', false, telefonoInput);
            isValid = false;
        }

        // Si no es válido, evitar el envío
        if (!isValid) {
            event.preventDefault();
        }
    });
});
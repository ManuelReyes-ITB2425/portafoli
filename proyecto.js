document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    setTimeout(() => {
        nav.classList.add("active");
    }, 500);

    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal para la imagen del proyecto
    const projectImage = document.querySelector('.proyecto-individual .imagen-funcionalidades img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    projectImage.addEventListener('click', () => {
        modalImage.src = projectImage.src;
        modal.style.display = 'flex';
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
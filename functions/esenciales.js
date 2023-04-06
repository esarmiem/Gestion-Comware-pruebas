const pieDePaginaContainer = document.querySelector('#pie-de-pagina-container');

// Agregar un controlador de eventos al documento que muestra u oculta el pie de página cuando se hace clic
document.addEventListener('click', (event) => {
  if (event.target.closest('#pie-de-pagina-container') === null) {
    pieDePaginaContainer.classList.toggle('ocultar');
  }
});

const links = document.querySelectorAll('.nav3 a');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // previene la acción predeterminada del enlace
    const iframeId = link.getAttribute('href'); // obtiene el ID del iframe correspondiente
    const iframes = document.querySelectorAll('iframe'); // obtiene todos los iframes
    iframes.forEach(iframe => {
      if (iframe.getAttribute('id') === iframeId.substring(1)) { // muestra el iframe correspondiente
        iframe.style.display = 'block';
      } else { // oculta todos los demás iframes
        iframe.style.display = 'none';
      }
    });
  });
});


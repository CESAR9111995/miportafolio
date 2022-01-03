const btnMod = document.querySelector('.icono-modooscuro');
const menuoscuro = document.querySelector('ul');
btnMod.addEventListener('click', modooscuro);

function modooscuro() {
    let theme = document.getElementById('tema');
  
    if (theme.getAttribute("href") === "css/estilos.css") {
        theme.href = "css/estilosModooscuro.css";
        menuoscuro.classList.add('ul-activo-oscuro');
      
    } else {
      theme.href = "css/estilos.css";
      menuoscuro.classList.remove('ul-activo-oscuro');
      
    }
  }
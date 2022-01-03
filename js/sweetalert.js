const btnWhats = document.querySelector('.whatsapp');

btnWhats.addEventListener('click', () => {
    Swal.fire({
        html: `<h2 class="title-what">Whatsapp</h2>
        <a class="enlace-what" href="https://api.whatsapp.com/send?phone=5527949003" target="_blank">Envíar mensaje de WhatsApp</a>`,
        confirmButtonColor: '#F2102B',
        confirmButtonText: 'Cancelar',
        background: '#0DB128',
        
      })
});

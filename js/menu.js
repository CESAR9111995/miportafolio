const iconoMenu = document.querySelector('.menu-logo');
const btnClose = document.querySelector('#btn-close');
const menu = document.querySelector('#cabecera');
const enlace1 = document.querySelector('#enlace1');
const enlace2 = document.querySelector('#enlace2');
const enlace3 = document.querySelector('#enlace3');
const enlace4 = document.querySelector('#enlace4');


iconoMenu.addEventListener('click', () => {
      if(menu.classList.contains('header-activo')){
          menu.classList.remove('header-activo');
     } else{
          menu.classList.add('header-activo');
     }
     
});

enlace1.addEventListener('click', ()=> {
    if(menu.classList.contains('header-activo')){
     menu.classList.remove('header-activo');
}else{
menu.classList.add('header-activo');
}
});


enlace2.addEventListener('click', ()=> {
     if(menu.classList.contains('header-activo')){
      menu.classList.remove('header-activo');
 }else{
 menu.classList.add('header-activo');
 }
 });

 
enlace3.addEventListener('click', ()=> {
    if(menu.classList.contains('header-activo')){
      menu.classList.remove('header-activo');
 }else{
 menu.classList.add('header-activo');
 }
 });

 
enlace4.addEventListener('click', ()=> {
     if(menu.classList.contains('header-activo')){
      menu.classList.remove('header-activo');
 }else{
 menu.classList.add('header-activo');
 }
 });

 btnClose.addEventListener('click', ()=>{
     if(menu.classList.contains('header-activo')){
          menu.classList.remove('header-activo');
     } 
 });
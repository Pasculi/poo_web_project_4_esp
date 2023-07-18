/*Función que aplica opacidad a los botones editar, añadir lugar y a las X de cerrar */
const opacityButtons = () => {
  const btns = Array.from(document.querySelectorAll('.btn'));
  btns.forEach(btn => {
    function addOpacidad() {
      btn.style.opacity = "0.6";
    }
    function removeAddOpacidad() {
      btn.style.opacity = "1";
    }
    btn.addEventListener("mouseover", addOpacidad);
    btn.addEventListener("mouseout", removeAddOpacidad);
  })

}

/*Funcion para dar like al corazón*/
const buttonLike = (evt) => {
  evt.target.classList.toggle("card__place-button--like-active");
}

/*Función para eliminar una card*/
const buttonDeleteCard = (evt) => {
  evt.target.parentNode.parentNode.remove();
}

const btn = Array.from(document.querySelectorAll('.btn'));
console.log(btn)
export { opacityButtons, buttonLike, buttonDeleteCard };
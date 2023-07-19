/*Función que aplica opacidad a los botones editar, añadir lugar y a las X de cerrar */
const btns = Array.from(document.querySelectorAll('.btn'));
const opacityButtons = () => {
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

/*Abrir y cerrar Popup_Form*/
const editProfile = document.querySelector('.profile__author-button--edit');
const editPlace = document.querySelector('.profile__author-button--add-place');
const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupForm = Array.from(document.querySelectorAll('.popup'));

function showPopup() {
  popupForm.forEach(popup => {
    popup.classList.add('popup--show');
  })
}
function closePopup() {
  popupForm.forEach(popup => {
    popup.classList.remove('popup--show');
  })
}
editProfile.addEventListener('click', showPopup);
editPlace.addEventListener('click', showPopup);
popupCloseProfile.addEventListener('click', closePopup);
popupClosePlace.addEventListener('click', closePopup);
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopup()
  }
});
/*Abrir y cerrar Popup_Form*/


export { showPopup, closePopup, opacityButtons, buttonLike, buttonDeleteCard };
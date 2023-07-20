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
const popupCloseImage = document.querySelector('.popup-image__button-close-image');
const popupProfile = document.querySelectorAll('.popup-profile');
const popupPlace = document.querySelectorAll('.popup-place');

function showPopupProfile() {
  popupProfile.classList.add('popup--show');
}
function closePopupProfile() {
  popupProfile.classList.remove('popup--show');
}
function showPopupPlace() {
  popupPlace.classList.add('popup--show');
}
function closePopupPlace() {
  popupPlace.classList.remove('popup--show');
}
editProfile.addEventListener('click', showPopupProfile);
editPlace.addEventListener('click', showPopupPlace);
popupCloseProfile.addEventListener('click', closePopupProfile);
popupClosePlace.addEventListener('click', closePopupPlace);
popupCloseImage.addEventListener('click', closePopupImage);
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopup()
  }
});
/*Abrir y cerrar Popup_Form*/

/*Funcion para desplagar una imagen */
const popupImage = document.querySelector('.popup-image')
function openPopupImage(){
  popupImage.classList.add('popup-image--show')
}
function closePopupImage() {
  popupImage.classList.remove('popup-image--show');

}

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopupImage()
  }
});

export { openPopupImage, closePopupImage, showPopupProfile, closePopupProfile, showPopupPlace, closePopupPlace, opacityButtons, buttonLike, buttonDeleteCard };
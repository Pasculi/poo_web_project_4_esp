const popupImage = document.querySelector('.popup-image');
const popupUrl = document.querySelector('.popup-image__url');
const popupCloseImage = document.querySelector('.popup-image__button-close-image');

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardContainer = document.querySelector(".container-card");//Donde se renderizarán las Card
    const templatecard = cardContainer.querySelector('.card');//Seleccionamos la etiqueta template


    return templatecard
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    // Añadir datos
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._element.querySelector('.card__place-image-place').setAttribute("src", this._link);
    this._element.querySelector('.card__place-image-place').setAttribute("alt", this._name);


    // Devolver el elemento
    return this._element;

  }
  _handleOpenPopup() {
    this._link.setAttribute = ('src', popupUrl);
    popupImage.classList.add('popup--show');
  }
  _handleClosePopup() {
    this._link.setAttribute = ('src', '');
    popupImage.classList.remove('popup--show');
  }
  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    })
    popupCloseImage.addEventListener('click', () => {
      this._handleClosePopup();
    })
  }
}

initialCards.forEach(data => {
  const card = new Card(data, template);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});
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
    // Añadir datos
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._element.querySelector('.card__place-image-place').setAttribute("src", this._link);
    this._element.querySelector('.card__place-image-place').setAttribute("alt", this._name);


    // Devolver el elemento
    return this._element;

  }

}

initialCards.forEach(data => {
  const card = new Card(data, template);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});
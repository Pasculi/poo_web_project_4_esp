export default class Card{
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }
  _getTemplateCard() {
    const cardContainer = document.querySelector(this._template).content;//Donde se renderizarán las Card
    console.log("🚀 ~ file: card.js:9 ~ Card ~ _getTemplateCard ~ cardContainer:", cardContainer)
    const templatecard = cardContainer.querySelector('.card').cloneNode(true);//Seleccionamos la etiqueta template
    return templatecard
  }
  renderCard() {
    this._cardElement = this._getTemplateCard();
    
  }

}


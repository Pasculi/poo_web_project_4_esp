import opacityButtons  from "./utils.js"


opacityButtons()
const initialCards = [
  {
    name: "Santiago",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/santiago-portada.jpg",
  },
  {
    name: "Valdivia",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/Encantos_Valdivia-y-Corral_mercado-fluvialjpg-1024x683.jpg",
  },
  {
    name: "Puerto de Valparaíso",
    link: "https://media.istockphoto.com/id/827067390/es/foto/colorido-valparaiso.jpg?s=612x612&w=0&k=20&c=VsJWIW249JHwoSUfpIhCYjl7gELpdCLxa0trOo_nqjk=",
  },
  {
    name: "Calama",
    link: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-atacama-capa2019-01-820x430.jpg",
  },
  {
    name: "Antofagasta",
    link: "https://visitchile.imgix.net/destinos/320_Antofagasta1.jpg?w=960&h=448&fit=crop&q=auto&auto=format",
  },
  {
    name: "Ciudad de Arica",
    link: "https://q-xx.bstatic.com/xdata/images/city/600x480/671802.jpg?k=f2af7c265359c6bfef67dd8137aae05a987d3df4208c8423068a807acc405ad3&o=",
  },
];
/* FUNCION PARA CARGAR CARDS INICIALES */
const renderInitialCards = () => {
  initialCards.forEach(initialCard => {
    console.log(initialCard)
    const cardContainer = document.querySelector('.card');
    console.log(cardContainer);
    const elementCard = document.querySelector('.card__place-image-place');

  })

}
renderInitialCards()

/* const card = document.querySelector('.card');
console.log(card);
const templateCard = document.querySelector('.card__place').content;
const elementCard = templateCard.querySelector('.card__place').clonNode(true);
elementCard.querySelector(".card__place-name").textContent = `${initialCard.name}`;
console.log(elementCard) */



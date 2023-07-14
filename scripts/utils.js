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
console.log("desde Utils")

export default opacityButtons;
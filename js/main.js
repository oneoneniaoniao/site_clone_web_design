// contact buttonの三角を動かす
transparentBtn = document.getElementById("button_after")
transparentBtn.addEventListener("click", () => {
  transparentBtn.classList.add("clicked");
  console.log(transparentBtn)
  setTimeout(() => {
    transparentBtn.classList.remove("clicked");
  }, 400)
});

// sticky headerにするため
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let value = window.scrollY
  // console.log(value)
  // if( window.matchMedia("(min-width:769px)").matches){
  if (value < 20) {
    header.classList.remove("is_fixed");
    console.log("header is released", value)
  } else if (value>30) {
    header.classList.add("is_fixed");
    console.log("header is fixed" , value)
  }
})


// ハンバーガーメニュー
const btnMenu = document.getElementById("js-btnMenu");
const gnavSP = document.getElementsByClassName("gnavSP")[0];
btnMenu.addEventListener("click", ()=>{
  btnMenu.classList.toggle("active");
 gnavSP.classList.toggle("show");
})

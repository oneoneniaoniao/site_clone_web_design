// header固定
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let value = window.scrollY
  if (value < 10) {
    header.classList.remove("is_fixed");
    // console.log("header is released", value)
  } else if (value > 20) {
    header.classList.add("is_fixed");
    // console.log("header is fixed", value)
  }
})


// ハンバーガーメニュー
const btnMenu = document.getElementById("js-btnMenu");
const gnavSP = document.getElementsByClassName("gnavSP")[0];
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  gnavSP.classList.toggle("show");
})

// スクロールトップボタン
const scroll_to_top_btn = document.querySelector('#scroll_top_btn');
scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};
window.addEventListener('scroll', scroll_event);
function scroll_event() {
  if (window.pageYOffset > 400) {
    scroll_to_top_btn.style.opacity = '1';
  } else if (window.pageYOffset < 400) {
    scroll_to_top_btn.style.opacity = '0';
  }
};


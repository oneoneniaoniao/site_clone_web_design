// スライドショー
const imgs = [
  './img/works/smoothiesta.jpg',
  './img/works/web-conference.jpg',
  './img/works/lamina.jpg'
]
// imgs.forEach((img, index) => {
//   let imgTag= document.createElement("img");
//   imgTag.src = img
// })

const target = document.getElementById("slide_img");
const dots = document.querySelectorAll(".dots>.dot");
const MS = 2500;

let current = 0;
dots[current].classList.add("selected");

const select_img = current => {
  target.style.backgroundImage = `url(${imgs[current]})`;
  dots.forEach(dot => {
    dot.classList.remove("selected");
  })
  dots[current].classList.add("selected");
}

const changeImg = num => {
  if (current + num >= 0 && current + num < imgs.length) {
    current += num;
  } else if (current + num == -1) {
    current = imgs.length - 1;
  } else if (current + num == imgs.length) {
    current = 0;
  }
  select_img(current)
}

dots.forEach((dot, index) => {
  dot.onclick = () => {
    select_img(index)
    clearTimeout(timer);
  }
})

const timer = setInterval(changeImg, MS, 1);
document.getElementById("prev").onclick = () => {
  changeImg(-1);
  clearTimeout(timer);
}
document.getElementById("next").onclick = () => {
  changeImg(1);
  clearTimeout(timer);
}
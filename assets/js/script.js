console.log("script loaded");

const images = document.querySelectorAll(".slider img");
const slider = document.querySelector(".slider");
let animation;
let counter = 0;

const prevClick = () => {
  count(-1);
};

const nextClick = () => {
  count(+1);
};

const mouseEnter = () => {
  clearInterval(animation);
};

const mouseLeave = () => {
  animation = setInterval(nextClick, 2000);
};

const count = (c) => {
  setImage((counter += c));
};

const setImage = (c) => {
  if (c >= images.length) counter = 0;
  else if (c < 0) counter = images.length - 1;
  slider.style.marginLeft = `${-30 * counter}vw`;
  console.log(counter);
};

slider.style.width = `${30 * images.length}vw`;
animation = setInterval(nextClick, 1000);
setImage(counter);

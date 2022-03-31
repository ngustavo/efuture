console.log("script loaded");

const e = document.querySelector(".scene-3 img");

const timer = (i = 1) => {
  setTimeout(() => {
    e.src = `assets/img/slide_${i}_09.png`;
    i < 4 ? timer(i + 1) : timer();
  }, 1500);
};

timer();

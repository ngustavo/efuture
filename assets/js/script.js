console.log("script loaded");

const e = document.querySelector(".scene-3 img");

const timer = (i = 1) => {
  console.log("t");
  setTimeout(() => {
    console.log("tt", i);
    // e.style.backgroundImage = `url("assets/img/slide_${i}_09.png")`;
    e.src = `assets/img/slide_${i}_09.png`;
    i < 4 ? timer(i + 1) : timer();
  }, 1000);
};

timer();

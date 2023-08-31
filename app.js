var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x + "px";
  blur.style.top = dets.y + "px";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      entry.isIntersecting
          ? entry.target.classList.add("show")
          : entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll("img.hidden");

hiddenElements.forEach((el) => observer.observe(el));



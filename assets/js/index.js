let navv = document.getElementById("navvbar-id");
let scrollBtn = document.getElementById("scroll-btn");
let coreFeatures = document.getElementById("core-features");

document.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navv.style.boxShadow = ".1rem .2rem .3rem rgba(0, 0, 0, .08)";
      navv.classList.add('fixed-top');
  } else {
    navv.style.background = "#FFF";
    navv.style.boxShadow = "none";
      navv.classList.remove('fixed-top');
  }
});

scrollBtn.addEventListener("click", () => {
  let offset = 100;
  let elementPosition = coreFeatures.getBoundingClientRect().top;
  console.log(elementPosition);
  let offsetPosition = elementPosition - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});
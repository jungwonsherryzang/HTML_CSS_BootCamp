//making animations on hamburger - Select each bars and hamburger class
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

//making animations on drawer
const mobileNav = document.querySelector(".mobileNav");



//when we click the hamburger, it adds the various classes to each bar
hamburger.addEventListener("click", () => {
  //for hamburgers
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");

  //for drawer
  mobileNav.classList.toggle("openDrawer");
});

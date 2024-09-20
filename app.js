function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onload = function () {
  const scrollTopBtn = document.querySelector(".scrollTop");
  window.addEventListener("scroll", () => {
    const scrollposition = document.documentElement.scrollTop;
    const scrollheidht =
      document.documentElement.offsetHeight - window.innerHeight;
    if (scrollposition > scrollheidht * 0.9) {
      scrollTopBtn.classList.add("is-active");
    } else {
      scrollTopBtn.classList.remove("is-active");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const logo = document.querySelector(".logo");
  const body = document.querySelector("body");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    body.classList.toggle("overflow-hidden");
    body.classList.toggle("bg-black");
    logo.classList.toggle("is-active");
  });
};

// animation section

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    //  else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Something Else

const navSub_LI = document.querySelectorAll("#navsub > a"),
  contents = document.querySelectorAll("#Contents > p"),
  btNext = document.querySelector("#bt-next"),
  setContent = (ref) =>
    contents.forEach((p, i) =>
      p.classList.toggle("noDisplay", p.dataset.ref !== ref)
    );
navSub_LI.refIndex = [...navSub_LI].findIndex((li) =>
  li.classList.contains("active")
);
setContent(navSub_LI[navSub_LI.refIndex].dataset.ref);

navSub_LI.forEach((li, indx, arr) => {
  li.onclick = () => {
    navSub_LI.refIndex = indx;
    setContent(navSub_LI[indx].dataset.ref);
    arr.forEach((z) => z.classList.toggle("active", z === li));
  };
});
btNext.onclick = () => {
  navSub_LI[navSub_LI.refIndex++].classList.remove("active");
  if (navSub_LI.refIndex >= navSub_LI.length) navSub_LI.refIndex--;
  navSub_LI[navSub_LI.refIndex].classList.add("active");
  setContent(navSub_LI[navSub_LI.refIndex].dataset.ref);
};

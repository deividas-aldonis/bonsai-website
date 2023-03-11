const mobileNav = document.querySelector(".navbar__nav-mobile");
const mobileNavHamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const accordionBtns = document.querySelectorAll(".navbar__accordion-btn");

const subMenuCategoryBtns = document.querySelectorAll(".sub-menu-category");
const featuredTemplates = document.querySelectorAll(
  ".featured-templates-wrapper"
);

mobileNavHamburgerBtn.addEventListener("click", openMenu);

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", openAccordion);
});

function openMenu() {
  if (mobileNav.classList.contains("hide")) {
    mobileNav.classList.remove("hide");
  } else {
    mobileNav.classList.add("hide");
  }
}

function openAccordion(e) {
  const accordionBtn = e.currentTarget;
  console.log(accordionBtn.dataset.accordion);
  if (!accordionBtn.dataset.accordion) return;

  const accordion = accordionBtn.parentElement;
  if (!accordion) return;

  if (accordion.classList.contains("hide")) {
    accordion.classList.remove("hide");
  } else {
    accordion.classList.add("hide");
  }
}

subMenuCategoryBtns.forEach((btn) => {
  btn.addEventListener("click", switchTemplate);
});

function switchTemplate(e) {
  const target = e.currentTarget;
  subMenuCategoryBtns.forEach((btn) => btn.classList.remove("active"));

  target.classList.add("active");

  const targetFeaturedTemplate = [...featuredTemplates].find(
    (featuredTemplate) => {
      return featuredTemplate.dataset.template === target.dataset.template;
    }
  );
  featuredTemplates.forEach((t) => t.classList.remove("active"));

  targetFeaturedTemplate.classList.add("active");
}

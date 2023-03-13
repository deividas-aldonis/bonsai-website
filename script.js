const mobileNav = document.querySelector(".navbar__nav-mobile");
const mobileNavHamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const accordionBtns = document.querySelectorAll(".navbar__accordion-btn");

const subMenuCategoryBtns = document.querySelectorAll(".sub-menu-category");
const featuredTemplates = document.querySelectorAll(
  ".featured-templates-wrapper"
);

const toggleBtn = document.querySelector(".plan-section__toggle");
const toggleSwitch = document.querySelector(".toggle__switch");

const monthlyOption = document.querySelector(".toggle__monthly");
const yearlyOption = document.querySelector(".toggle__yearly-wrapper");

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

toggleBtn.addEventListener("click", (e) => {
  const { type } = e.currentTarget.dataset;
  const target = e.currentTarget;

  const { monthly, yearly } = getOptionSizes();

  if (type === "monthly") {
    target.setAttribute("data-type", "yearly");
    toggleSwitch.style.transform = `translateX(${monthly.width})`;
    toggleSwitch.style.width = yearly.width;
  } else {
    target.setAttribute("data-type", "monthly");
    toggleSwitch.style.transform = `translateX(0px)`;
    toggleSwitch.style.width = monthly.width;
  }
});

function getOptionSizes() {
  const { width: mWidth, height: mHeight } =
    monthlyOption.getBoundingClientRect();
  const { width: yWidth, height: yHeight } =
    yearlyOption.getBoundingClientRect();

  return {
    monthly: {
      width: mWidth + "px",
      height: mHeight + "px",
    },
    yearly: {
      width: yWidth + "px",
      height: yHeight + "px",
    },
  };
}

function setToggleSwitch() {
  const { monthly } = getOptionSizes();

  toggleSwitch.style.width = monthly.width;
}
setToggleSwitch();

/////////////////////////////////////////////////
// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  //it will look at the headerEl element and it it does have nav-open class it will remove it and vice versa
});

/////////////////////////////////////////////////
//Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link"); // to collect all a:link

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // disable scrolling to the section

    const href = link.getAttribute("href"); // the attribute we want to get from each link

    // Scroll back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to the other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // here we got the element that we want to scroll to, the element that has the id equal to the href of the element we click on

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  }); // e = event, we add addEvent... to each a:link,
});

/////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) {
    document.body.classList.add("no-flex-gap");
  }
}
checkFlexGap();

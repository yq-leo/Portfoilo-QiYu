const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

function expandNavBar() {
  collapsibles.forEach((item) => {
    item.classList.toggle("collapsible--expanded");
  });
}

function alertSubmitSuccess() {
  alert("Submitted! Thank you for your message!");
}

alert(
  "This website is deprecated and no longer maintained. Please visit https://yq-leo.github.io/portfolio/ (still under construction) for the latest version with some exciting new features!"
);

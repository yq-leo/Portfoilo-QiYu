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
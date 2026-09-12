var allBtn = document.querySelectorAll(".colorBtn");
var div = document.querySelector("div");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    var btnColor = btn.classList[3];

    var bgColor = btnColor.replace("btn", "bg");

    div.classList.replace(div.classList[0], bgColor);
  });
});

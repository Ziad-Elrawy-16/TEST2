var allBtn = document.querySelectorAll(".colorBtn");
var div = document.querySelector("div");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    var text = btn.innerHTML;
    var color = text.replace("MAKE-", "").toLowerCase();
    div.style.backgroundColor = color;
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").style.display = "block";
  this.reset();
});
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.product;
    const categorySelect = document.getElementById("category");
    if (category.includes("Masala")) categorySelect.value = "Masala / Spices";
    else if (category.includes("Sauce")) categorySelect.value = "Sauce";
    else categorySelect.value = "Dhup / Wet Dhup";
  });
});
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    "Hello Priyojit Agency,",
    "",
    "I would like to make an enquiry.",
    "Name: " + data.get("name"),
    "Business: " + (data.get("business") || "Not provided"),
    "Enquiry type: " + data.get("type"),
    "Product category: " + data.get("category"),
    "Message: " + (data.get("message") || "Please share more details.")
  ].join("\n");
  window.open("https://wa.me/918609780403?text=" + encodeURIComponent(message), "_blank", "noopener");
});

function sendWhatsAppMessage(event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "919391056536"; // your number with country code

  const text =
    `Name: ${fname} ${lname}%0A` +
    `Email: ${email}%0A` +
    `Subject: ${subject}%0A` +
    `Message: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
 const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
}

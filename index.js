const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible" role="alert">`, `   <div>${message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Pemesanan telah berhasil, anda akan dihubungi admin kami lewat WA", "success");
  });
}

function handleClose() {
  if (document.getElementById("lezrent")) {
    document.getElementById("lezrent").classList.remove("show");
  }
}

function handleOpen() {
  if (document.getElementById("lezrent")) {
    document.getElementById("lezrent").classList.add("show");
  }
}

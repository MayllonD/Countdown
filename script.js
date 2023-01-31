var modal = document.querySelector("#modal");
var fundoModal = document.querySelector(".containerModal");
function abrindoModal() {
  if (modal.style.display === "none") {
    modal.style.display = "flex";

    fundoModal.style.background = "rgba(0,0,0,0.25)";
  } else {
    modal.style.display = "none";
    fundo.style.background = "rgb(0, 208, 219)";
  }
  console.log("funcionou");
}
function fechaModal() {
  modal.style.display = "none";
  location.reload();
}

document.getElementById("botao").disabled = true;

document.getElementById("input").addEventListener("input", function (event) {
  var conteudo = document.getElementById("input").value;

  if (conteudo !== null && conteudo !== "") {
    document.getElementById("botao").disabled = false;
  } else {
    document.getElementById("botao").disabled = true;
  }
});

const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minutesText = document.querySelector("#minutes");
const secondText = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();

const newYearsDate = new Date(`1 June ${currentYear}`);

setInterval(() => {
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 3600) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysText.innerText = days;
  hoursText.innerText = hours;
  minutesText.innerText = minutes;
  secondText.innerText = seconds;
}, 1000);

function addPadStart(value) {
  return value < 10 ? `0${value}` : value;
}

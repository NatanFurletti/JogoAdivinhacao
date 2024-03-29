const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;
function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = "";
  xAttempts++;
}

//events

function handleResetClit() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleResetClit);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

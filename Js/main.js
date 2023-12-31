import myLocalStorage from "./localStorage.js";
import randomApiText from "./apiText.js";
import typedText from "./typedText.js";
import countDown from "./timer.js";

export const typeText = document.getElementById("typeText");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

typeText.disabled = true;

document.getElementById("startButton").addEventListener("click", async () => {
  countDown();
  randomApiText(); // Display a new quote when starting
  typeSession();
});

let mistakes;
function typeSession() {
  typeText.value = "";
  typeText.disabled = false;
  startButton.disabled = true;
  resetButton.disabled = false;
  document.addEventListener("keydown", () => typeText.focus());
}

typedText(); // Input type text logic
myLocalStorage(); // Data save to local storage

document.getElementById("resetButton").addEventListener("click", function () {
  location.reload();
  localStorage.clear();
});

// Keyboard event
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startButton.click();
  } else if (event.key === "Escape") {
    location.reload();
  }
});

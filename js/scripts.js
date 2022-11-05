//UI Logic

function getInitialWhisperValue() {
  const personInput = document.getElementById("personInput").value;
  
  document.querySelector("span#personInput1").innerText = personInput;
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(e) {
    e.preventDefault();
    getInitialWhisperValue();
    document.querySelector("div#whisper").removeAttribute("class");
  }
}

window.onload = function () {
  setFormSubmissionEventHandler();
};
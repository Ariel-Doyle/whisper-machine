//UI Logic

function getInitialWhisperValue() {
  const personInput = document.getElementById("personInput").value;

  const whisper = document.querySelector("span#personInput1");
  whisper.innerText = personInput.toLowerCase();
  whisper.style.fontSize = '45px';
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

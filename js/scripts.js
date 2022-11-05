//UI Logic

function getInitialWhisperValue() {
  const personInput = document.getElementById("personInput").value;
  const whisper = document.querySelector("span#personInput1");
  whisper.innerText = personInput.toLowerCase();
}

function returnSmallerFont() {
  getInitialWhisperValue();
    const computedFont = window.getComputedStyle(whisper, null);
    let computedSize = computedFont.getPropertyValue('font-size');
    let smallerFont = parseFloat(computedSize) * .9;
    whisper.style.fontSize = smallerFont + 'px';
}
 
function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    returnSmallerFont();
    document.querySelector("div#whisper").removeAttribute("class");
  });
}

window.addEventListener("load", function () {
  setFormSubmissionEventHandler();
});

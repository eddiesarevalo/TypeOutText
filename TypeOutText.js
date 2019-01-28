var text = "";
var typingFunction = null;
var typingCharacterId = 0;

var resultContainer = document.querySelector("#typingResults");
var typeButton = document.querySelector("#typeButton");
typeButton.addEventListener("click", typeButtonClicked);

function typeButtonClicked(){
  typeOutText();
}

function typeOutText(){
  window.clearInterval(typingFunction);
  typingCharacterId = 0;
  resultContainer.innerHTML = "";

  text = getTypeText();

  typingFunction = setInterval(printText, 100);
}

function getTypeText(){
  var textInput = document.querySelector("#textInput");
  return textInput.value;
}

function printText() {
  var showText = "";

  if(typingCharacterId <= text.length){
      showText = text.charAt(typingCharacterId);
      typingCharacterId++;

      var textSpan = document.createElement('span');
      textSpan.innerHTML = showText;

      typingResults.appendChild(textSpan);
  }
  else{
    window.clearInterval(typingFunction);
    return;
  }
}

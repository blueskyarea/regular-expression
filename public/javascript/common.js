// common.js

function answerCheck(){
  var inputText = document.getElementById('inputArea').value.replace(/\r\n|\r/g, "\n");
  var lines = inputText.split( '\n' );
  var outString = "";
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] == '') {
      continue;
    }
    var matchString = applyRegularExpression(lines[i]);
    if (matchString) {
      outString = outString + matchString + "\n";
    }
  }
  document.getElementById('resultArea').value = outString;
}

function applyRegularExpression(text) {
  var ansPattern = document.getElementById('answerBox').value; 
  var regexp = new RegExp(ansPattern, "g");
  if (text.match(regexp)) {
    return text;
  }
}


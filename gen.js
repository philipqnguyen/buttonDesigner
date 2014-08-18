var buttonText = document.getElementById('button-text');

var style1 = document.getElementById('buttonstyle1');
var style2 = document.getElementById('buttonstyle2');
var style3 = document.getElementById('buttonstyle3');
var style4 = document.getElementById('buttonstyle4');
var style5 = document.getElementById('buttonstyle5');

var redDesign = document.getElementById('red-design');
var orangeDesign = document.getElementById('orange-design');
var yellowDesign = document.getElementById('yellow-design');
var greenDesign = document.getElementById('green-design');
var blueDesign = document.getElementById('blue-design');

var outputVisual = document.getElementById('output-visual');
var outputHTMLCode = document.getElementById('output-html');
var outputCSSCode = document.getElementById('output-css');

var previewButton = document.getElementById('preview');

var styleArr = [style1, style2, style3, style4, style5];
var colorArr = [redDesign, orangeDesign, yellowDesign, greenDesign, blueDesign];

var styleArrString = ['style1', 'style2', 'style3', 'style4', 'style5']
var colorArrString = ['redDesign', 'orangeDesign', 'yellowDesign', 'greenDesign', 'blueDesign']

var standardCSS = ".yourClassName { \nborder-radius: 4px; \nbackground: #ccc; \ncolor: #fff; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \nfont-family: Arial, sans-serif; \npadding: 1em 2em 1em 2em; \ntext-decoration: none; \n";
var roundEdgeCSS = ".yourClassName { \nborder-radius: 25px; \nbackground: #ccc; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \ntext-align: center; \ndisplay: inline-block; \npadding: 1em 2em 1em 2em; \n";
var increaseLengthCSS = ".yourClassName { \nbackground: #ccc; \nborder-radius: 4px; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \nwidth: 15%; \ntext-align: center; \ndisplay: inline-block; \npadding: 1em 2em 1em 2em;\n";
var largeButtonCSS = ".yourClassName { \nbackground: #ccc; \nborder-radius: 4px; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \nfont-size: 120%; \npadding: 1em 2em 1em 2em; \ntext-decoration: none; \n";
var underlineCSS = ".yourClassName { \nborder-radius: 4px; \nbackground: #ccc; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \npadding: 1em 2em 1em 2em; \ntext-decoration: underline; \n";

var redButton = "background-color: red;\n}";
var orangeButton = "background-color: orange;\n}";
var yellowButton = "background-color: yellow;\ntext-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}";
var greenButton = "background-color: green;\n}";
var blueButton = "background-color: blue;\n}";

var styleCSSKey = {
  "style1": standardCSS,
  "style2": roundEdgeCSS,
  "style3": increaseLengthCSS,
  "style4": largeButtonCSS,
  "style5": underlineCSS
}

var colorCSSKey = {
  "redDesign": redButton,
  "orangeDesign": orangeButton,
  "yellowDesign": yellowButton,
  "greenDesign": greenButton,
  "blueDesign": blueButton
}

// Loops through the styles to find the style that was selected
var style = function () {
  for (i = 0; i < styleArr.length; i++) {
    if (styleArr[i].checked) {
      return styleArr[i].value;
    }
  }
}

// Loops through the colors to find the color that was selected
var color = function () {
  for (i = 0; i < colorArr.length; i++) {
    if (colorArr[i].checked) {
      return colorArr[i].value;
    }
  }
}

// returns proper button style css code
var styleCSS = function () {
  for (i = 0; i < styleArr.length; i++) {
    if (styleArr[i].checked) {
      return styleCSSKey[styleArrString[i]];
    }
  }
}

// returns selected button color css code
var colorCSS = function () {
  for (i = 0; i < colorArr.length; i++) {
    if (colorArr[i].checked) {
      return colorCSSKey[colorArrString[i]];
    }
  }
}

// Outputs the text and selected color and style into the HTML
var preview = function() {
  outputVisual.className = color() + " " + style();
  outputVisual.innerHTML = "<p>" + buttonText.value + "</p>";
  outputHTMLCode.textContent = "<a class='yourClassName' href='#'>" + buttonText.value + "</a>"
  outputCSSCode.textContent = styleCSS() + colorCSS();
}

var loadPreview = function() {
  // Previews default button on document load
  preview();
  // listens for events on text input
  buttonText.addEventListener('keyup', preview, false);
  // listens for events on styles
  for (i = 0; i < styleArr.length; i++) {
    styleArr[i].addEventListener('click', preview, false);
  }
  // listens for events on colors.
  for (i = 0; i < colorArr.length; i++) {
    colorArr[i].addEventListener('click', preview, false);
  }
}

// load the preview and start listening only when the final element in the generator section loads.
if (!!outputVisual) {
  loadPreview();
}

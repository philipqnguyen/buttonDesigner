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

var previewButton = document.getElementById('preview');

var style_arr = [style1, style2, style3, style4, style5];

var color_arr = [redDesign, orangeDesign, yellowDesign, greenDesign, blueDesign];

// Loops through the styles to find the style that was selected
var style = function () {
  for (i = 0; i < style_arr.length; i++) {
    if (style_arr[i].checked) {
      return style_arr[i].value;
    }
  }
}

// Loops through the colors to find the color that was selected
var color = function () {
  for (i = 0; i < color_arr.length; i++) {
    if (color_arr[i].checked) {
      return color_arr[i].value;
    }
  }
}

// Outputs the text and selected color and style into the HTML
var preview = function() {
  outputVisual.className = color() + " " + style();
  outputVisual.innerHTML = "<p>" + buttonText.value + "</p>";
}

// listens for events on text input
buttonText.addEventListener('keyup', preview, false);

// listens for events on styles
for (i = 0; i < style_arr.length; i++) {
  style_arr[i].addEventListener('click', preview, false);
}

// listens for events on colors.
for (i = 0; i < color_arr.length; i++) {
  color_arr[i].addEventListener('click', preview, false);
}

var standardCSS = ".yourClassName { \nborder-radius: 4px; \nbackground: #ccc; \ncolor: #fff; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \nfont-family: Arial, sans-serif; \npadding: 0 3em; \ntext-decoration: none; \n}";

var roundEdgeCSS = ".yourClassName { \nborder-radius: 25px; \nbackground: #ccc; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \ntext-align: center; \ndisplay: inline-block; \npadding: 0 3em; \n}";

var increaseLengthCSS = ".yourClassName { \nbackground: #ccc; \nborder-radius: 4px; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \nwidth: 15%; \ntext-align: center; \ndisplay: inline-block; \npadding: 0 4em; \n}";

var largeButtonCSS = ".yourClassName { \nbackground: #ccc; \nborder-radius: 4px; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \nfont-size: 120%; \npadding: 0 3em; \ntext-decoration: none; \n}";

var underlineCSS = ".yourClassName { \nborder-radius: 4px; \nbackground: #ccc; \ndisplay: inline-block; \nbox-shadow: 10px 10px 5px #888888; \ncolor: #fff; \nfont-family: Arial, sans-serif; \npadding: 0 3em; \ntext-decoration: underline; \n}";








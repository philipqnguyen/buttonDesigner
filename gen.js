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

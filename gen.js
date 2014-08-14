var buttonText = document.getElementById('button-text').value;

var squareEdges = document.getElementById('square-edges');

var roundEdges = document.getElementById('round-edges');

var redDesign = document.getElementById('red-design');

var blueDesign = document.getElementById('blue-design');

var outputVisual = document.getElementById('output-visual');

var previewButton = document.getElementById('preview');

var style_arr = [squareEdges, roundEdges];

var color_arr = [redDesign, blueDesign];


var style = function () {
  for (i = 0; i < style_arr.length; i++) {
    if (style_arr[i].checked) {
      return style_arr[i].value;
    }
  }
}

var color = function () {
  for (i = 0; i < color_arr.length; i++) {
    if (color_arr[i].checked) {
      return color_arr[i].value;
    }
  }
}



var preview = function() {

  outputVisual.className = color() + " " + style();
  outputVisual.innerHTML = "<p>" + buttonText + "</p>";
}


previewButton.addEventListener('click', preview, false);

var btnShow = document.getElementById("btn-show");
var btnClear = document.getElementById("btn-clear");
btnShow.addEventListener("click", drawDesign);
btnClear.addEventListener("click", clearCanvas);

function drawLine(canvasId, color, xStart, yStart, xFinal, yFinal) {
    var el = document.getElementById(canvasId);
    var ctx = el.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xFinal, yFinal);
    ctx.stroke();
    ctx.closePath();
}

function upperLeft(lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        var y = lines * offset - i * offset;
        drawLine("my-canvas", color, 0 + adjust, y + adjust, x + adjust, 0 + adjust);
    }
}

function upperRight(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        drawLine("my-canvas", color, x, 0 + adjust, dimension, x + adjust);
    }
}

function bottomLeft(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        drawLine("my-canvas", color, 0 + adjust, x, x + adjust, dimension);
    }
}

function bottomRight(dimension, lines, color, offset) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        var y = lines * offset - i * offset;
        drawLine("my-canvas", color, x, dimension, dimension, y);
    }
}

function drawDesign() {
    var txtDimension = document.getElementById("txt-dimension");
    var txtLines = document.getElementById("txt-lines");
    var txtColor = document.getElementById("txt-color");
    var optSquare = document.getElementById("opt-square");

    var dimension = parseInt(txtDimension.value);
    var lines = parseInt(txtLines.value);
    var color = txtColor.value;

    var offset = dimension / lines;

    var el = document.getElementById("my-canvas");
    el.width = dimension;
    el.height = dimension;

    if (optSquare.checked == true) {
        var adjust = 0;
        upperLeft(lines, color, offset, adjust);
        upperRight(dimension, lines, color, offset, adjust);
        bottomLeft(dimension, lines, color, offset, adjust);
        bottomRight(dimension, lines, color, offset);
    } else {
        dimension = dimension / 2;
        offset = offset / 2;
        var adjust = dimension
        upperLeft(lines, color, offset, adjust);
        upperRight(dimension, lines, color, offset, adjust);
        bottomLeft(dimension, lines, color, offset, adjust);
        bottomRight(dimension, lines, color, offset);
    }
}

function clearCanvas() {
    var el = document.getElementById("my-canvas");
    var ctx = el.getContext("2d");
    var w = el.width;
    var h = el.height;
    ctx.clearRect(0, 0, w, h);
}

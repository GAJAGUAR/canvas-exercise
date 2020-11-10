var btnShowObject = document.getElementById("btnShow");
var btnClearObject = document.getElementById("btnClear");
btnShowObject.addEventListener("click", DrawCanvasDesign);
btnClearObject.addEventListener("click", ClearCanvas);

function DrawLine(canvasId, color, xStart, yStart, xFinal, yFinal) {
    var canvasElement = document.getElementById(canvasId);
    var canvasContext = canvasElement.getContext("2d");
    canvasContext.beginPath();
    canvasContext.strokeStyle = color;
    canvasContext.moveTo(xStart, yStart);
    canvasContext.lineTo(xFinal, yFinal);
    canvasContext.stroke();
    canvasContext.closePath();
}

function UpperLeft(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        var y = lines * offset - i * offset;
        DrawLine("myCanvas", color, 0 + adjust, y + adjust, x + adjust, 0 + adjust);
    }
}

function UpperRight(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        DrawLine("myCanvas", color, x, 0 + adjust, dimension, x + adjust);
    }
}

function BottomLeft(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        DrawLine("myCanvas", color, 0 + adjust, x, x + adjust, dimension);
    }
}

function BottomRight(dimension, lines, color, offset, adjust) {
    for (i = 0; i <= lines; i++) {
        var x = 0 + (i * offset);
        var y = lines * offset - i * offset;
        DrawLine("myCanvas", color, x, dimension, dimension, y);
    }
}

function DrawCanvasDesign() {
    var txtDimensionObject = document.getElementById("txtDimension");
    var txtLinesObject = document.getElementById("txtLines");
    var txtColorObject = document.getElementById("txtColor");
    var radSquareObject = document.getElementById("radSquare");

    var desiredDimension = parseInt(txtDimensionObject.value);
    var desiredLines = parseInt(txtLinesObject.value);
    var desiredColor = txtColorObject.value;

    var offsetLine = desiredDimension / desiredLines;

    var canvasElement = document.getElementById("myCanvas");
    canvasElement.width = desiredDimension;
    canvasElement.height = desiredDimension;

    if (radSquareObject.checked == true) {
        var adjust = 0;
        UpperLeft(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        UpperRight(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        BottomLeft(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        BottomRight(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
    } else {
        desiredDimension = desiredDimension / 2;
        offsetLine = offsetLine / 2;
        var adjust = desiredDimension
        UpperLeft(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        UpperRight(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        BottomLeft(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
        BottomRight(desiredDimension, desiredLines, desiredColor, offsetLine, adjust);
    }
}

function ClearCanvas() {
    var canvasElement = document.getElementById("myCanvas");
    var canvasContext = canvasElement.getContext("2d");
    var w = canvasElement.width;
    var h = canvasElement.height;
    canvasContext.clearRect(0, 0, w, h);
}
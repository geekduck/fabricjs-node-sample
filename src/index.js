var fs = require('fs'),
    fabric = require('fabric').fabric,
    canvas = fabric.createCanvasForNode(975, 500);

var font
font = new canvas.Font('cFont', '/System/Library/Fonts/ヒラギノ角ゴシック\ W3.ttc');
//font = new canvas.Font('cFont', '/usr/share/fonts/ipa-gothic/ipag.ttf');
canvas.contextContainer.addFont(font); // when using createPNGStream or createJPEGStream
canvas.contextTop.addFont(font); // when using toDataURL or toDataURLWithMultiplier

var json = {
    "objects": [{
        "type": "path",
        "left": 104,
        "top": 96,
        "width": 99,
        "height": 115,
        "fill": "#00274D",
        "overlayFill": null,
        "stroke": null,
        "strokeWidth": 1,
        "scaleX": 1.04,
        "scaleY": 1.04,
        "angle": -25.8,
        "flipX": false,
        "flipY": false,
        "opacity": 1,
        "selectable": true,
        "path": [
            ["M", 67.39, 22.39],
            ["c", 2.59, -0.43, 5.11, 1.44, 5.54, 4.18],
            ["c", 0.43, 2.66, -1.3, 5.26, -3.89, 5.69],
            ["c", -1.8, 0.29, -3.6, -0.58, -4.61, -2.02],
            ["L", 44.5, 34.56],
            ["l", 10.87, 59.62],
            ["c", 17.42, -4.46, 26.06, -14.18, 27.5, -29.02],
            ["l", -10.01, -0.72],
            ["L", 88.7, 51.91],
            ["l", 9.43, 21.24],
            ["c", -3.38, -1.95, -5.9, -5.11, -9.29, -7.06],
            ["c", -0.29, 25.06, -27.14, 32.76, -33.77, 47.95],
            ["C", 44.42, 100.08, 26.5, 114.77, 6.91, 82.8],
            ["L", 0, 92.45],
            ["l", 1.51, -21.6],
            ["l", 19.66, 4.68],
            ["l", -9.43, 3.67],
            ["c", 7.49, 11.59, 17.57, 19.87, 36.43, 16.42],
            ["L", 36.22, 36.57],
            ["l", -18.65, 2.38],
            ["c", -0.14, 2.16, -1.73, 4.03, -3.89, 4.39],
            ["c", -2.59, 0.43, -5.04, -1.44, -5.54, -4.1],
            ["c", -0.43, -2.74, 1.3, -5.26, 3.89, -5.69],
            ["c", 1.94, -0.36, 3.89, 0.65, 4.9, 2.3],
            ["l", 17.93, -4.82],
            ["l", -1.37, -6.84],
            ["c", -4.82, -0.79, -8.93, -4.75, -9.79, -10.08],
            ["c", -1.15, -6.62, 3.1, -12.89, 9.43, -13.97],
            ["c", 6.41, -1.01, 12.46, 3.46, 13.54, 10.08],
            ["c", 0.86, 5.18, -1.58, 10.15, -5.69, 12.6],
            ["l", 1.87, 6.12],
            ["l", 20.74, -2.88],
            ["C", 64.01, 24.26, 65.52, 22.75, 67.39, 22.39],
            ["L", 67.39, 22.39],
            ["z"],
            ["M", 33.91, 5.18],
            ["c", -3.46, 0.58, -5.76, 3.96, -5.11, 7.56],
            ["c", 0.58, 3.6, 3.89, 6.05, 7.27, 5.47],
            ["c", 3.46, -0.58, 5.76, -3.96, 5.18, -7.56],
            ["C", 40.61, 7.05, 37.37, 4.61, 33.91, 5.18],
            ["z"]
        ]
    }],
    "background": "rgba(0, 0, 0, 0)"
};
canvas.loadFromJSON(json);
var text = new fabric.Text('regularアイウエオ aaa', {
    left: 150,
    top: 50,
    fontFamily: 'cFont'
});
canvas.add(text);

var out = fs.createWriteStream(__dirname + '/../tmp/out_' + new Date().getTime() + '.png');
var stream = canvas.createPNGStream();
stream.on('data', function(chunk) {
    out.write(chunk);
});

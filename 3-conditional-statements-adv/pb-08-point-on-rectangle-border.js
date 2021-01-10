// PB-08. Point on Rectangle Border
function pointRectangleBorder(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    if (
        ((x1 === x || x2 === x) && ((y2 > y && y > y1) || y1 === y || y2 === y)) ||
        ((y1 === y || y2 === y) && ((x2 > x && x > x1) || x1 === x || x2 === x))
    ) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointRectangleBorder(2, -3, 12, 3, 8, -1);
pointRectangleBorder(2, -3, 12, 3, 12, -1);
pointRectangleBorder(2, -3, 12, 3, 1, 3);
pointRectangleBorder(2, -3, 12, 3, 2, 3);
pointRectangleBorder(x1, y1, x2, y2, x, y);

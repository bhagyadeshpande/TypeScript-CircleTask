var Circle = /** @class */ (function () {
    function Circle(circleObj) {
        this.radius = circleObj.radius;
        this.color = circleObj.color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (rad) {
        this.radius = rad;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (c) {
        this.color = c;
    };
    Circle.prototype.toString = function () {
        return this.color.toString();
    };
    Circle.prototype.getArea = function () {
        return Math.PI * (this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circleObj = new Circle({
    radius: 1,
    color: "red"
});
var radiusValue = circleObj.getRadius();
console.log("initial radius :" + " " + radiusValue);
var colorName = circleObj.getColor();
console.log("initial color :" + " " + colorName);
//setting radius and color values through object and getting the updated values
circleObj.setRadius(5);
circleObj.setColor("yellow");
var newRadius = circleObj.getRadius();
var newColor = circleObj.getColor();
console.log("updated radius :" + " " + newRadius);
console.log("updated Color :" + " " + newColor);
var area = circleObj.getArea();
console.log("Area of the circle is :" + " " + area);
var circum = circleObj.getCircumference();
console.log("circumference of circle is :" + " " + circum);
circleObj.setColor("purple");
var col = circleObj.getColor();
console.log("toString method:" + " " + col.toString());

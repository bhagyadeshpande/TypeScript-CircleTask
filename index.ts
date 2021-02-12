interface CircleConfiguration {
  radius: number;
  color: string;
}

class Circle {
  radius: number;
  color: string;

  constructor(circleObj: CircleConfiguration) {
    this.radius = circleObj.radius;
    this.color = circleObj.color;
  }

  getRadius(): number {
    return this.radius;
  }
  setRadius(rad: number): void {
    this.radius = rad;
  }
  getColor(): string {
    return this.color;
  }
  setColor(c: string): void {
    this.color = c;
  }
  toString(): String {
    return this.color.toString();
  }
  getArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

let circleObj = new Circle({
  radius: 1,
  color: "red",
});

let radiusValue = circleObj.getRadius();
console.log("initial radius :" + " " + radiusValue);
let colorName = circleObj.getColor();
console.log("initial color :" + " " + colorName);

//setting radius and color values through object and getting the updated values
circleObj.setRadius(5);
circleObj.setColor("yellow");
let newRadius = circleObj.getRadius();
let newColor = circleObj.getColor();
console.log("updated radius :" + " " + newRadius);
console.log("updated Color :" + " " + newColor);

let area = circleObj.getArea();
console.log("Area of the circle is :" + " " + area);
let circum = circleObj.getCircumference();
console.log("circumference of circle is :" + " " + circum);

circleObj.setColor("purple");
let col = circleObj.getColor();
console.log("toString method:" + " " + col.toString());

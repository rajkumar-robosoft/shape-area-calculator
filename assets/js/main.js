// A constructor for defining a Rectangle

class AreaOfRectangle {

  constructor(length, width) {

    this.length = length;
    this.width = width;
    this.area = this.length * this.width;

  }
}

// A constructor for defining a Circle

class AreaOfCircle {

  constructor(diameter) {

    this.diameter = diameter;
    this.radius = diameter / 2;
    this.area = (Math.PI * this.radius * this.radius).toFixed(2);

  }
}

// A constructor for defining a Square

class AreaOfSquare {

  constructor(side) {

    this.side = side;
    this.area = this.side * this.side;

  }
}

// A constructor for defining a Ellipse

class AreaOfEllipse {

  constructor(majorAxis, minorAxis) {

    this.majorAxis = majorAxis;
    this.minorAxis = minorAxis;
    this.area = (Math.PI * this.majorAxis * this.minorAxis).toFixed(2);

  }
}

// Define a Shape Factory

class ShapeFactory {

  createShape(type, props) {
    
    switch (type) {
      case "Rectangle":
        document.getElementById(
          "result-details"
        ).innerHTML = `You have selected a <b>${type}</b> with a length of ${props.length} and width of ${props.width}. Below is your result:`;
        return new AreaOfRectangle(props.length, props.width);

      case "Circle":
        document.getElementById(
          "result-details"
        ).innerHTML = `You have selected a <b>${type}</b> with a diameter of ${props.diameter}. Below is your result:`;
        return new AreaOfCircle(props.diameter);

      case "Square":
        document.getElementById(
          "result-details"
        ).innerHTML = `You have selected a <b>${type}</b> with a side of ${props.side}. Below is your result:`;
        return new AreaOfSquare(props.side);

      case "Ellipse":
        document.getElementById(
          "result-details"
        ).innerHTML = `You have selected a <b>${type}</b> with a minor axis of ${props.minorAxis} and major axis of ${props.majorAxis}. Below is your result:`;
        return new AreaOfEllipse(props.majorAxis, props.minorAxis);

        //default: null;


    }
  }
}

// Create an instance of our factory

const shape = new ShapeFactory();

// Go to Step 2

function gotoStep2() {

  let qry = document.querySelector('input[name="shape"]:checked');
  this.selectedShape = qry.value;

  if (qry) {
    document.getElementById("step-1").classList.add("hidden");
    document.getElementById("step-2").classList.remove("hidden");
    document.getElementById("selected-shape").innerText = selectedShape;
    document
      .getElementById(`${selectedShape.toLowerCase()}-input`)
      .classList.remove("hidden");
    // var inputs = document.getElementById(`${selectedShape.toLowerCase()}-input`).getElementsByTagName('input');
    // console.log('INPUTS', inputs);

  } else {
    document.getElementById("error-msg").innerHTML = "Please Select a Shape";
  }
}

//Go to Step 3


function gotoStep3() {

  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");
  document
    .getElementById(`${this.selectedShape.toLowerCase()}-input`)
    .classList.add("hidden");


  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let diameter = document.getElementById("diameter").value;
  let side = document.getElementById("side").value;
  let majorAxis = document.getElementById("major-axis").value;
  let minorAxis = document.getElementById("minor-axis").value;
  let area = shape.createShape(this.selectedShape, {
    length,
    width,
    diameter,
    side,
    majorAxis,
    minorAxis,
  }).area;
  document.getElementById("result-area").innerHTML = `The Area is <b class='area-calc'>${area}</b>`;
}

//  Startover - Reset

function startOver() {

  this.length = null;
  this.width = null;
  this.diameter = null;
  this.side = null;
  this.majorAxis = null;
  this.minorAxis = null;
  document.getElementById("step-3").classList.add("hidden");
  document.getElementById("step-2").classList.add("hidden");
  document
    .getElementById(`${this.selectedShape.toLowerCase()}-input`)
    .classList.add("hidden");
  document.getElementById("step1-form").reset();
  document.getElementById("step2-form").reset();
  document.getElementById("step-1").classList.remove("hidden");

}

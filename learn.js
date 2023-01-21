var car = {};

car.type = "Sedan";
car.make = "Honda";
car.model = "Civic";
car.year = 2015;
car.weight = 3000;

car.startCar = function()
{
    alert("Car is started");
}

car.stopCar = function()
{
    alert("Car is stopped")
}

var out = "Car Type: " + car.type;
out += "<br/>Car Make: " + car.make;
out += "<br/>Model: " + car.model;
out += "<br/>Year: " + car.year;
out += "<br/>Weight: " + car.weight;

car.startCar();
car.stopCar();

document.getElementById('output').innerHTML = out;
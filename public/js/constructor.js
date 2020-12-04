const Car = function ({ model, year, miles }) {
  this.model = model;
  this.year = year;
  this.miles = miles;
};

Car.prototype.toString = function () {
  return `${this.model} of ${this.year} year has done ${this.miles} miles`;
};

const hondaCivic = new Car({ model: "Honda Civic", year: 1994, miles: 20000 });
const fordMondeo = new Car({ model: "Ford Mondeo", year: 2003, miles: 16000 });
const toyotaTundra = new Car({
  model: "Toyota Tundra",
  year: 1990,
  miles: 38000,
});

console.dir(`${hondaCivic}`);
console.dir(`${fordMondeo}`);
console.dir(`${toyotaTundra}`);

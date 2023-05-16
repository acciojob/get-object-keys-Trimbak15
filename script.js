//your JS code here. If required.
// Creating the student object
const student = {
  name: "John Doe"
};

// Adding getKeys() to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Using the getKeys() method
const keys = student.getKeys();
console.log(keys); // Output: ["name"]

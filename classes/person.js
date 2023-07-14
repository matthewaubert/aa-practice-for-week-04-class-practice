// class "Person"
class Person {
  // constructor function; input: firstName, lastName, age
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // firstName property
    this.lastName = lastName; // lastName property
    this.age = age; // age property
  }

  // instance method "introduce"
  introduce() {
    // log "Hi, I'm <firstName> <lastName>, and I'm <age> years old."
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  // static method "introducePeople"; input: array of Person instances
  static introducePeople(array) {
    // if arg is not an array, throw error message: "introducePeople only takes an array as an argument."
    if (!Array.isArray(array)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }
    // for each el in array
    array.forEach(el => {
      // if not all items in array are Person class instances, throw error message: "All items in array must be Person class instances."
      if (!(el instanceof Person)) throw new Error("All items in array must be Person class instances.");
    });

    // else, call introduce on each of the People instances in input array
    array.forEach(instance => instance.introduce());
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
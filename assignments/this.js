/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*  Overall, the value of "this" is different, depending on how a function is invoked. But we need to know the context in which the function is invoked.
* 1. Window - the highest/ most general level; the this keyword always tries to point to the window which is why we have to know how to bind this key word more specifically. Can use "use strict" to make sure it doesnt bind to window.
* 2. Implicit - the default binding, useful for objects and methods. it points to the object on which the function is called (what's left of the dot)
* 3. New - this constructs a new object and then makes "this" point to it
* 4. Explicit - useful for binding functions, way more control because you make explicit what value "this" points to, using call, apply or bind; bind is to use for later (permanently binds)
*
* write out a code example of each explanation above
*/

// Principle 1 --> code example for Window Binding

  function sayHi(name) {
    return `Hello my name is ${this.name}`;
}
  console.log(sayHi());

// Principle 2 --> code example for Implicit Binding

  const ron = {
    name: "Ron",
    age: "13",
    hairColor: "fire engine red",
    aboutMe: function() {
      return `My hair color is ${this.hairColor}`;
    }
  }

  console.log(ron.aboutMe());


// Principle 3 --> code example for New Binding

 function Wizard(things) {
  this.name = things.name;
  this.house = things.house;
  this.pet = things.pet;
  console.log(this);
  }

  Wizard.prototype.speak = function() {
  return `My name is ${this.name}`;
  }

  const harry = new Wizard ({
    name: "Harry",
    house: "Gryffindor",
    pet: "Hedwig",
  });

console.log(harry.pet);
console.log(harry.speak());


// Principle 4 -->  code example for Explicit Binding

  const witch = {
    "name": "Hermione",
    "favorite-subject": "Transfiguration",
  }

  const skills = ["do spells", "fly on a broomstick", "transform into an animal"];

  function intro (skill1, skill2, skill3) {
    return `Hi, my name is ${this.name} and I can ${skill1}, ${skill2}, ${skill3}!`
  }

    console.log(intro.call(witch, ...skills));

/*
  Factory Function
  A factory function is a regular function that returns a new object. It doesn’t require the new keyword like a constructor function and provides more flexibility for creating objects.
*/
const Person = (description) => {
  const { name, age, location, occupation } = description;
  return {
    printDetails: () => {
      console.log(`My name is ${name}, I'm ${age} years old and I live in ${location} and work as a ${occupation}`);
    }
  };
}

const firstPerson = Person({
  name: 'Bob Belcher',
  age: 48,
  location: 'New Jersey',
  occupation: 'Restaurant Owner'
})

firstPerson.printDetails();
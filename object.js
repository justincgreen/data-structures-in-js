/*
  In JavaScript, an object is a collection of key-value pairs. 
  This data structure is also called map, dictionary or hash-table in other programming languages.
*/
const person = {
  name: 'Hank',
  location: 'Texas',
  occupation: 'Propane Salesman',
  summary: function() {
    console.log(`${this.name} is a ${this.occupation} who lives in ${this.location}`);
  }
}

person.summary();

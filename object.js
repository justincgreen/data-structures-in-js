const person = {
  name: 'Hank',
  location: 'Texas',
  occupation: 'Propane Salesman',
  summary: function() {
    console.log(`${this.name} is a ${this.occupation} who lives in ${this.location}`);
  }
}

person.summary();

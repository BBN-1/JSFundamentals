function employees(array) {
  class People {
    constructor(employeeName, personalNum) {
      (this.name = employeeName), (this.personalNUmber = personalNum);
      this.print = () =>
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
  }

  let personList = [];

  for (const names of array) {
    let personalNum = names.length;
    let employeeName = names;

    person = new People(employeeName, personalNum);
    personList.push(person);
  }

  personList.forEach((s) => {
    s.print();
  });
}

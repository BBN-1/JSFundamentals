function company(array) {
  let employeeList = {};

  for (let line of array) {
    let entry = line.split(" -> ");
    let company = entry[0];
    let employeeId = entry[1];

    if (!employeeList.hasOwnProperty(company)) {
      employeeList[company] = [];
      employeeList[company].push(employeeId);
    } else {
      if (!employeeList[company].includes(employeeId)) {
        employeeList[company].push(employeeId);
      }
    }
  }

  let sortedArray = Object.entries(employeeList).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let el of sortedArray) {
    console.log(el[0]);
    for (let id of el[1]) {
      console.log(`-- ${id}`);
    }
  }
}

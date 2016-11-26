console.log('js sourced');

var employees= [];



var newEmp = function(firstName, lastName, idNum, jobTitle, annSal){

  var emp = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNum').value,
    title: document.getElementById('jobTitle').value,
    salary: document.getElementById('annSal').value,
  };
  employees.push(emp);
};

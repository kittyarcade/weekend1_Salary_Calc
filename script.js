console.log('js sourced');

var employees= [];



var newEmp = function(firstName, lastName, idNum, jobTitle, annSal){

  var emp = {
    firstName: firstName,
    lastName: lastName,
    idNum: idNum,
    jobTitle: jobTitle,
    annSal: annSal
  };
  employees.push(emp);
};

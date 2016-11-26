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
  employees.push(newEmp);
};

var getEmp = function(){

var fName = document.getElementById('firstName').value;
var lName = document.getElementById('lastName').value;
var id = document.getElementById('idNum').value;
var title = document.getElementById('jobTitle').value;
var salary = document.getElementById('annSal').value;

};

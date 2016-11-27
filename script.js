console.log('js sourced');

var employees= [];

//getting employee info and storing to employees array
var getInfo = function(){

var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var idNum = document.getElementById('idNum').value;
var jobTitle = document.getElementById('jobTitle').value;
var annSal = document.getElementById('annSal').value;

newEmp = [firstName, lastName, idNum, jobTitle, annSal];
employees.push(newEmp);

//clearing input fields
document.getElementById('firstName'). value ='';
document.getElementById('lastName').value = '';
document.getElementById('idNum').value = '';
document.getElementById('jobTitle').value = '';
document.getElementById('annSal').value = '';
};

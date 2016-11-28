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

//appending info to DOM
var text = '';

for(i = 0; i < employees.length; i++) {
  text += employees[i] + '<br>';
document.getElementById('outputP').innerHTML = text;

}

};

//calculating total monthly salary
var monthlySalaryTotal = function () {
  var salariesTotal = 0;
  for (var i = 0; i < employees.length; i++){
  salariesTotal += Number(employees[i][4]);
}
//get monthly salary total to appear on DOM
  document.getElementById('outputSal').innerHTML = salariesTotal/12;

};



//get monthly salary total to appear on DOM

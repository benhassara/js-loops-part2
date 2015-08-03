// add scripts

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

// console.log("sanity check!");

console.log('Problem 1: ');

for (var i = 0; i < students.length - 1; i++)
  console.log(students[i]);

console.log('\nProblem 2:');

for (i = 0; i < students.length; i++) {
  if (i % 2 === 0)
    console.log(students[i]);
}

console.log('\nProblem 3:');

for (i = students.length - 1; i >= 0; i--)
  console.log(students[i]);

console.log('\nProblem 4:');

for (var i = 0; i < students.length; i++) {
  if (i !== 0 && i !== students.length - 1) {
    console.log(students[i]);
    console.log(students[i]);
  }
  else
    console.log(students[i]);
}

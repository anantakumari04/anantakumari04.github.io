//json
//convert string into object or vice versa

const student = '{"name": "Amy", "age": 21}'

const st = JSON.parse(student);  //coming from server

console.log(st)

console.log(JSON.stringify(st));  //sending to server
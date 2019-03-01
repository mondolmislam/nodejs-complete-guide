//const means does not change
const name = 'Maidul Islam';//string data type variable

//let and const ES6 let variable value changable
let age = 30; //integer or number datab type
var haveChildren = false; //boolean data type

age =41;
//fucntion
function getUserInformation(name, age, haveChildren){
	return "Name: "+name+", age: "+age+" , have a children? :"+haveChildren;
}

console.log(getUserInformation(name,age,haveChildren));
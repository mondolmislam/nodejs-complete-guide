var name = 'Maidul Islam';//string data type variable
var age = 30; //integer or number datab type
var haveChildren = false; //boolean data type

//fucntion
const getUserInformation=(name, age, haveChildren) =>{
	return "Name: "+name+", age: "+age+" , have a children? :"+haveChildren;
}

const add = (a,b)=>{
	return a+b;
}

// same ass add function
const sameAdd = (a,b)=>a+b;
// one argument function
const addOne = a=>a+3;
//no argument function
const noArgument=()=>3+2;

console.log(add(2,4));
console.log(sameAdd(2,6));
console.log(addOne(6));
console.log(noArgument());
console.log(getUserInformation(name,age,haveChildren));
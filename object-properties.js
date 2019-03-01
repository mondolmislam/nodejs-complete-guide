const person={
	name: 'maidul',
	age: 29
}
console.log(person);

//create a function in side object and this keywoard using object's variable but does not return value
const persons={
	name: 'maidul',
	age: 29,
	getName:()=>{
		console.log('Hey, I am '+this.name);
	}
}
persons.getName();

//create a function in side object and this keywoard using object's variable but does not return value
const personsFunction={
	name: 'maidul',
	age: 29,
	getName:function(){
		console.log('Hey, I am '+this.name);
	}
}
personsFunction.getName();
//create a function in side object and this keywoard using object's variable but does not return value
const personsWithoutFunction={
	name: 'maidul',
	age: 29,
	getName(){
		console.log('Hey, I am '+this.name);
	}
}
personsWithoutFunction.getName();
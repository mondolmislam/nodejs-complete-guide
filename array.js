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
const hobbies = ['Sports','Cooking'];
//traditioanl for loop
for(let hobby of hobbies){
	console.log(hobby);
}
//using map
hobbies.map(hobby =>{console.log("hobby: "+hobby);});
hobbies.push("programming");
hobbies.map(hobby =>{console.log("hobby: "+hobby);});


const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result = computer.turnOn.apply(server);

console.log(result);

// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	// Car.call(this, "convertible", "petrol");
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.call(setBrand, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

// // Defining object
	// let person = {
	// 	first_name:'Mukul',
	// 	last_name: 'Latiyan',
	
	// 	//method
	// 	getFunction : function(){
	// 		return (`The name of the person is
	// 		${person.first_name} ${person.last_name}`)
	// 	},
	// 	//object within object
	// 	phone_number : {
	// 		mobile:'12345',
	// 		landline:'6789'
	// 	}
	// }
	// console.log(person.getFunction());
	// console.log(person.phone_number.landline);
 

    
// 	// Using a constructor
// 	function person(first_name,last_name){
// 	this.first_name = first_name;
// 	this.last_name = last_name;
//     this.getName =  function()
//     {
//         console.log("A")
//  			return (`The name of the person is
// 			${this.first_name} ${this.last_name}`)
// }
// 	}
// 	// Creating new instances of person object
// 	let person1 = new person('Mukul','Latiyan');
// 	let person2 = new person('Rahul','Avasthi');
	
// 	// console.log(person1.first_name);
// 	// console.log(`${person2.first_name} ${person2.last_name}`);
//     console.log(person1.getName());
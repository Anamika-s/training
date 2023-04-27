
// 	// Object.create() example a
// 	// simple object with some properties
// 	const coder = {
// 		isStudying : false,
// 		printIntroduction : function(){
// 			console.log(`My name is ${this.name}. Am I
// 			studying?: ${this.isStudying}.`)
// 		}
// 	}
// 	// Object.create() method
// 	const me = Object.create(coder);
	
// 	// "name" is a property set on "me", but not on "coder"
// 	me.name = 'Mukul';
	
// 	// Inherited properties can be overwritten
// 	me.isStudying = true;
	
// 	me.printIntroduction();

// const emp1 = {
//     id:1,
//     empname:"Ajay",
//     get: ()=>
// {
//      console.log("ID is " + emp1.id);
//      console.log("Name is " + emp1.empname);
      
// }

// }

// emp1.data="Ajkjk";
// const emp2 = {
//     id:2,
//     empname:"Deepak",
//     get: ()=>
// {
//      console.log("ID is " + emp2.id);
//      console.log("Name is " + emp2.empname);
      
// }

// }

//   emp1.get();
//   emp2.get();
//   console.log( emp1.data);

//    function Student(id,name)
//    {
//      this.id=100;
//      this.name="aaaaa";
//      this.get = ()=>
//      {
//          console.log("AAAAA")
//      }
//    }

//    Student.prototype.get1 = function  ()
//    {
// console.log("aaaaaaaaaaaaaaaaaaaa")
//    }
//    let s = new Student();
//    s.get();
//    s.get1();

// class emp 
// {
//     #address;
//     constructor(id, empname, manager, address)
//     {
//         this.id=id;
//         this.empname = empname;
//         this.manager = manager;
//         this.#address = address;
        
//     }
//     get = ()=>
//     {
//          console.log("ID is " + this.id);
//          console.log("Name is " + this.empname);
//          console.log("Manager is " + this.manager)
//           console.log("Address is " + this.#address);
//     }
// }

// class fullTime extends emp{
//     constructor(id, empname, manager, address, dept)
//     {
//         super(id,empname, manager, address);
//         this.dept = dept;
//     }
   
//     get1= ()=>
//     {
//         emp.call(this,get())
//        console.log("dept is " + this.dept)
          
//     }
// }
    

// const ft = new fullTime(1,"Deepak", "aa", "Delhi", "HR");
// // const emp2= new   emp(2,"Ajay");
// // emp1.get();
// ft.get();
// ft.get1();


 	
// // function Person(first, last, age, eye) {
// //     this.firstName = first;
// //     this.lastName = last;
// //     this.age = age;
// //     this.eyeColor = eye;

// //   }
// //   Person.prototype.
// //   get= () =>
// //   {
// //     console.log("P"
// // + p.firstName)
// //   }

// // let p = new Person("A","B",12,"A");
// // console.log("P"
// // + p.firstName)
// // p.get();
// // 	// Defining class in a Traditional Way.
// // 	function Vehicle(name,maker,engine){
// // 		this.name = name,
// // 		this.maker = maker,
// // 		this.engine = engine
         
// // 	};

// // 	Vehicle.prototype.getDetails = function(){
// // 		console.log('The name of the bike is '+ this.name);
// // 	}
	
// // 	let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
// // 	let bike2 = new Vehicle('Ninja','Kawasaki','998cc');
// // 	// bike1.get();
// // 	console.log(bike1.name);
// // 	console.log(bike2.maker);
    
// // 	console.log(bike1.getDetails());
 
// // // Abstraction example
// // 	function person(fname,lname){
// // 		let firstname = fname;
// // 		let lastname = lname;
	
// // 		let getDetails_noaccess = function(){
// // 			return (`First name is: ${firstname} Last
// // 				name is: ${lastname}`);
// // 		}
	
// // 		this.getDetails_access = function(){
// // 			return (`First name is: ${firstname}, Last
// // 				name is: ${lastname}`);
// // 		}
// // 	}
// // 	let person1 = new person('Mukul','Latiyan');
// // 	console.log(person1.firstname);
// // 	console.log(person1.getDetails_noaccess);
// // 	console.log(person1.getDetails_access());
 
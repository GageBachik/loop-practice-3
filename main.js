var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

function one(){
	students.map(function(value){
		console.log(value.name);
	});
}

function two(){
	students.map(function(value){
		console.log(value.age);
	});
}

function three(){
	students.map(function(value, index){
		if (index === 0 || index === 3 || index === 2){
			console.log(value.name + ' is from ' +value.city);
		}
	});
}

function four(){
	students.map(function(value, index){
		if (value.age > 25){
			console.log(value.name + ' is older than ' + 25);
		}
	});
}
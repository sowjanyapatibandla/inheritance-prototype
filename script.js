console.log("working");


//Problem 1
let parent = {
    Name : "sowji",
    Place : "India",
    Age : 22,
    showDetails : function(){
        console.log(this.Name + " " + this.Place + " " + this.Age);
    }
}
parent.showDetails();


let child = {
    Name : "palvancha",
    // Place : "bcm",
}
child.__proto__  = parent ;
child.showDetails();

console.log(parent);
console.log(child);

//Problem 2
let obj1 = {
    fname : "sowji",
    lname : "patibandla",
    showDetails : function () {
        console.log(this.fname + " " + this.lname);
    }
}
obj1.showDetails();
let obj2 = {
    fname : "sowji",
}
obj2.__proto__ = obj1;
obj2.showDetails();
console.log(obj2);



//Problem 3
let array =[5,10,15,20];
let arr = {
    getName:function(){
        let res = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(res);
    }
}
arr.getName();

//Problem 4
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("sowji")));
//functions
function sayHello(){
    console.log("Hello")
}
sayHello();

var sayBye = function(){
    console.log("bye");
}

sayBye();//ananymous function

function sing(song){
    console.log(song)
}
// sing();//arguement
function multiply(a,b){ 
    console.log(a,b)
    if ( a > 10 || b > 10){
        return"that is too hard";
    } else {
        return a*b;
    }
   
}
multiply(5,40);
 function multiply(a,b){
  return a*b;
 }
 alert((multiply(4,5)));


//  data structure
var list =["tiger","bear","cat"];
console.log(list[1]);


var user ={
    name:"mike",
    age: 34,
    hobby:"basketball",
    ismarried:false,
    spells:["doge","shazam","boos"],//array in object
    shout: function(){
        console.log("aggggggg");
    }
};//object

var list = [
    {
        username:"mike",
        password:"secre"
    },
    {
        username:"jess",
        password:"123"
    }
];//object in array



//function declaration
function newFunction(){

}
//function expression
var newFunction =(){

};
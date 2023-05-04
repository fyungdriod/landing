//faebook page 
var database =[
    {
       username:"anderi",
       password:"supersecret" 
    }
];

var newsfeed=[
    {
        username:"bobby",
        timeline:"s0 tired from learning" 
     },
     {
        username:"sally",
        timeline:"javascript is soo cool!"
     }
];
var userNamePrompt = prompt("what's your username?");
var PasswordPrompt = prompt("what's your password?");

function signIn(username,password){
    if (username === database[0].username && password === database[0].password){
        console.log(newsfeed);
    }else{
        alert("sorry,but you fucked up!")
    }

}

signIn( userNamePrompt, PasswordPrompt);
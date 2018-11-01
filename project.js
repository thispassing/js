var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you (in cm)?");
var pet = prompt("What is the name of your pet?");

var yy = pet[pet.length-1]

if (firstname[0]===lastname[0] && 20<age<30 && height>=170 && yy==="y"){
    console.log("Hey "+firstname+", this is Andrew.  Please help me.")
} else {
    console.log("What the crap, men.  Seriously, come on.")
}




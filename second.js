var hot = false
var temp = 70

if (temp>80) {
    console.log("Hot outside!");
}else if (temp<=80 && temp>=50){
    console.log("Medium temps rn fam.")
}else {
    console.log("What is this? Canada?")
}

var joke = prompt("How about you stop?");
console.log(joke)

var x = 0

while (x<5) {
    console.log("x is currently: "+x)

    if (x===3) {
        console.log("x IS EQUAL TO THREE! Break!");
        break;
    }

    console.log("x is still less than 5, adding 1 to x")
    x = x + 1
}

console.log("Done")


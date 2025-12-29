// conditional statements in JavaScript
let age = 25;
if (age > 20){
    console.log("You are an adult");
}

password = "1234";
if(password === "1234"){
    console.log("This is a very weak password");
}


let finishedLoading = true;
if(finishedLoading == true){
    console.log("Loading complete")
}

let dbPassword = '1234';
let enteredPassword = '12997301cvsah,cVMSN';
let username = "Daniella";

if(enteredPassword === dbPassword){
    console.log("Welcome " + username)
}else{
    console.log("Incorrect password")
}

let language = "Spanish";
if (language === "Spanish"){
    console.log("Bienvenido!")
}else if(language === "German"){
    console.log("Moin ! Servus! Moin !")
}else if(language === "English"){
    console.log("Welcome!")
}else{
    console.log("Invalid language selected")
}
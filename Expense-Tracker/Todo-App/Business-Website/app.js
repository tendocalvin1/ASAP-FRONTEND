document.body.innerHTML = "<h1>Software Engineer.</h1>";
document.body.innerHTML = document.body.innerHTML + "<button>Click me</button>";

console.log(document.body.style);
document.body.style.color = "yellow"


// adding text in DOM.
const body = document.body;
body.append("Myron Gaines Esq.")


// creating an element in DOM.
const div = document.createElement("div");
body.append(div)
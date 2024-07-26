const p = document.createElement('h1');
p.classList.add("custom_font");
p.innerText = "Little Sous Chefs";
document.body.prepend(p);


const myDiv = document.getElementById("myDiv");
//create checkbox element
let checkbox = document.createElement("input");

//assigning the attributes to created checkbox
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

// create label for checkbox
var label = document.createElement("label");

//append the created text to created label tag
label.appendChild(
  document.createTextNode("This create the label for checkbox."));

  myDiv.appendChild(checkbox);
  myDiv.appendChild(label);

  function loadGoogleFont(font){
    const link = document.createElement()
  }

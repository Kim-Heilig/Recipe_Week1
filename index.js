// create title and append it to top of page.

const p = document.createElement("h1");
p.classList.add("custom_font");
p.innerText = "Little Sous Chefs";
document.body.prepend(p);

//

// NOTES TO SELF: the code below is interesting and I only partly understand it.  It attempts to listen to the checklist for changes and apply code onto object e, given the conditions specified.

// document.getElementById("checklist").addEventListener("change", function (e) {
//   if (e.target.type === "checkbox") {
//     e.target.nextElementSibling.style.textDecoration = e.target.checked
//       ? "line-through"
//       : "none";
//     e.target.nextElementSibling.style.color = e.target.checked ? "#888" : "";
//   }
// });

// these did not work

// const myDiv = document.getElementById("myDiv");
// //create checkbox element
// let checkbox = document.createElement("input");

// //assigning the attributes to created checkbox
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// // create label for checkbox
// var label = document.createElement("label");

// //append the created text to created label tag
// label.appendChild(
//   document.createTextNode("This create the label for checkbox.")
// );

// myDiv.appendChild(checkbox);
// myDiv.appendChild(label);

// function loadGoogleFont(font) {
//   const link = document.createElement();
// }

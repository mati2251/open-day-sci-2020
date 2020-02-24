const elements = ["programowanie", "informatyka", "sieci", "komputery", "programowanie", "informatyka", "sieci", "komputery", "programowanie", "informatyka", "sieci", "komputery"];

let elementsHTML = "";

elements.forEach((item, index) => {
    elementsHTML += (`<h1 style="background-color: rgb(${255 - index * 20},${236 - (index * 12)}, ${Math.round(index * 14.5)}">${item}</h1>`);
});

document.getElementById("container").innerHTML = elementsHTML;
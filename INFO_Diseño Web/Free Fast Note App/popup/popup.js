//CODE 


//delaration of the textHeight to 0 (number)
var textHeight = 0;

//Listeners for our "Click Me" button, automatic text resize, and info button
document.getElementById("myButton").addEventListener("click", createNote);
document.getElementById("text").addEventListener("input", modifyTextHeight);
document.getElementById("infoButton").addEventListener("click", showInfo);


//this funtion autamically uodates the text height of the text area to 
//to match the input
function modifyTextHeight() {
    text.style.height = "auto";
    text.style.height = `${text.scrollHeight}px`;
    textHeight = text.scrollHeight;
}

//this funtion creates a new note inside the div
function createNote(){

    //select of the main div, text and creation of the new text area
    //where we are going to set the new text
    var main = document.getElementById("main");
    var text = document.getElementById("text");
    var nuevaNota = document.createElement("textarea");


    //select of type, height and css class of the new note
    nuevaNota.type = "text";
    nuevaNota.style.height = `${textHeight}px`;
    nuevaNota.className = "note";

    //change the note value and append to our main div
    nuevaNota.innerHTML = text.value;
    main.appendChild(nuevaNota);

    //reset height and value of text
    text.value = "";
    text.style.height = "20px";
}



function newId() {

}

function showInfo() {
    alert(
        "If yout have any trouble, please send an email to:\n\n" +
        "josedavidsoliscarmona@gmail.com"
    )
}
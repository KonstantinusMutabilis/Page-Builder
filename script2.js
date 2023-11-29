
const AddElementButton = document.querySelector("#addElement");
const EditElementButton = document.querySelector("#edit");
const DeleteElementButton = document.querySelector("#delete");
const ClearElementButton = document.querySelector("#clear");
const AddButton = document.getElementById("add");
const SaveButton = document.getElementById("save");
const LoadButton = document.getElementById("load");



const bgColorInput = document.getElementById("bgColorChange");
const errorMessage = document.getElementById("msg");
const ElmentTypeInput = document.querySelector("#ElmentType");
const ElmentWidthInput = document.querySelector("#ElmentWidth");
const ElmentHeightInput = document.querySelector("#ElmentHeight");
const ElmentBGColor = document.querySelector("#ElmenBgColor");
const ElementContentInput = document.getElementById("ElementContent");
const ElmentFontColorInput = document.getElementById("ElmentContentColor");
const ElmentFontUnitsInput = document.getElementsByName("units");
const ElmentFontHeightInput = document.getElementById("ElmentContentHeight");
const ElmentFontTypeInput = document.getElementById("ElmentFontType");
var i = 0;



function regextest() {


    let HeightRegex = /^(?:(?:[1-9]?[0-9]|1[0-9]{2})(?:\.[0-9]{1,4})?|200(?:\.0{1,4})?)$/;
    let WidthRegex = /^(?:(?:[1-9]?[0-9]|1[0-9]{2})(?:\.[0-9]{1,4})?|200(?:\.0{1,4})?)$/;
    let FontHeightRegex = /^(?:[0-5](?:\.\d{1,4})?)$/;


    if (!HeightRegex.test(ElmentHeightInput.value)) {
        errorMessage.textContent = "Element Height should be 0-200 px";
        AddElementButton.disabled = true;
        return;
    }
    else if (!WidthRegex.test(ElmentWidthInput.value)) {
        errorMessage.textContent = "Element Width should be 0-200 px";
        AddElementButton.disabled = true;
        return;
    }
    else if (!FontHeightRegex.test(ElmentFontHeightInput.value)) {
        errorMessage.textContent = "Element Font Height should be 0-5 rem";
        AddElementButton.disabled = true;
        return;
    }
    else {
        errorMessage.textContent = "";
        AddElementButton.disabled = false;
        return;
    }


}

ElmentHeightInput.addEventListener("input", regextest);
ElmentWidthInput.addEventListener("input", regextest);
ElmentFontHeightInput.addEventListener("input", regextest);


regextest();

AddButton.addEventListener("click", function backgroundColorChange(event) {

    event.preventDefault();

    let newColor = bgColorInput.value;

    document.querySelector(".page").style.backgroundColor = newColor;


    console.log("Background color changed to: " + newColor);

    document.getElementById("Child1").style.display = "none";

    document.getElementById("Child2").style.display = "flex";

});


AddElementButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (i < 28) {
        const pageElement = document.querySelector(".page").appendChild(document.createElement("div"));

        i++;


        pageElement.classList.add(`element${i}`);

        console.log(`"Add" button clicked, class - element${i}`);

        var Units = '';
        for (j = 0; j < ElmentFontUnitsInput.length; j++) {
            if (ElmentFontUnitsInput[j].checked) {
                Units = ElmentFontUnitsInput[j].value;
            }
        }

        let newElement = pageElement.appendChild(document.createElement(ElmentTypeInput.value));
        newElement.style.backgroundColor = ElmentBGColor.value;
        newElement.style.display = "flex";
        newElement.style.justifyContent = "center";
        newElement.style.alignItems = "center";
        newElement.style.columnGap = "10px";
        newElement.style.rowGap = "10px";
        newElement.style.width = ElmentWidthInput.value + "px";
        newElement.style.height = ElmentHeightInput.value + "px";
        newElement.innerHTML = ElementContentInput.value;
        newElement.style.color = ElmentFontColorInput.value;
        newElement.style.fontSize = ElmentFontHeightInput.value + Units;
        newElement.style.fontFamily = ElmentFontTypeInput.value;


        errorMessage.textContent = "";
    }
    else {
        errorMessage.textContent = "STOP MAKE ELEMENTS!!!!!!!!";
    }
});

EditElementButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (i > 0) {

        document.querySelector(`.element${i}`).remove();

        const pageElement = document.querySelector(".page").appendChild(document.createElement("div"));



        console.log(`"Save" button clicked, class - element${i}`);


        pageElement.classList.add(`element${i}`);

        var Units = '';
        for (j = 0; j < ElmentFontUnitsInput.length; j++) {
            if (ElmentFontUnitsInput[j].checked) {
                Units = ElmentFontUnitsInput[j].value;
            }
        }

        let newElement = pageElement.appendChild(document.createElement(ElmentTypeInput.value));
        newElement.style.backgroundColor = ElmentBGColor.value;
        newElement.style.display = "flex";
        newElement.style.justifyContent = "center";
        newElement.style.alignItems = "center";
        newElement.style.width = ElmentWidthInput.value + "px";
        newElement.style.height = ElmentHeightInput.value + "px";
        newElement.innerHTML = ElementContentInput.value;
        newElement.style.color = ElmentFontColorInput.value;
        newElement.style.fontSize = ElmentFontHeightInput.value + Units;
        newElement.style.fontFamily = ElmentFontTypeInput.value;


        errorMessage.textContent = "";
    }
    else {
        errorMessage.textContent = "i=0";
    }
});


DeleteElementButton.addEventListener('click', (event) => {

    event.preventDefault();

    if (i > 0) {

        document.querySelector(`.element${i}`).remove();
        i--;

        console.log(`"Delete" button clicked, class - element${i}`);

        errorMessage.textContent = "";

    }
    else {
        errorMessage.textContent = "i=0";
    }
});

ClearElementButton.addEventListener('click', (event) => {

    event.preventDefault();

    document.querySelector(".page").innerHTML = "";
    document.querySelector(".page").style.backgroundColor = "#FFF1D6";

    i = 0;
    console.log("Background color changed to: default");
    console.log(`"Clear" button clicked, class - element${i}`);

    document.getElementById("Child1").style.display = "flex";

    document.getElementById("Child2").style.display = "none";

    errorMessage.textContent = "";

});

SaveButton.addEventListener('click', (event) => {

    event.preventDefault();
    const divElement = document.querySelector(".page");

    if (divElement) {
        const divContent = divElement.innerHTML;
        localStorage.setItem('savedPage', divContent);
        alert('Page saved to local storage!');
    } else {
        alert('Div not found!');
    }
});

LoadButton.addEventListener('click', (event) => {

    event.preventDefault();


    const savedDivContent = localStorage.getItem('savedPage');

    if (savedDivContent) {
        const divElement = document.querySelector(".page");
        divElement.innerHTML = savedDivContent;
        alert('Page retrieved from local storage and displayed!');
    } else {
        alert('No saved div found in local storage.');
    }
});
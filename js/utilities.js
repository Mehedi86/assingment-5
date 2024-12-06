// common function for input field value

function getInputFieldValue(id){
    const inputFieldValue =  document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputFieldValue);
    return inputFieldNumber;
};

// common function for innertext of an element

function getElementText(id){
    const elementInnerText = document.getElementById(id).innerText;
    const elementInnerNumber = parseFloat(elementInnerText);
    return elementInnerNumber;
};
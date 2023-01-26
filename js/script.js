// Botones
var btnCrypt= document.querySelector(".btn-crypt");
var btnDecrypt = document.querySelector(".btn-decrypt");
var btnCopy = document.querySelector(".btn-copy");

var containerImage = document.querySelector(".container-image");
var containerResult = document.querySelector(".container-result");

var textArea = document.querySelector(".text-area");
var viewResult = document.querySelector(".result");

const crypt = () => {
    refreshScreen();
    let text = textArea.value;

    let result = text
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
        
        viewResult.textContent = result;
}

const decrypt = () => {
    refreshScreen();
    let text = textArea.value;

    let result = text
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    viewResult.textContent = result;      
}

const copy = () => {
    navigator.clipboard.writeText(messageCopy.innerHTML)
}

const refreshScreen = () =>{
    containerImage.style.display="none";
    containerResult.style.display="block";
}

btnCrypt.onclick = crypt;
btnDecrypt.onclick = decrypt; 
btnCopy.onclick = copy;







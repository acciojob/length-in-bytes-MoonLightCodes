// script.js
function byteSize(str) {
    const blob = new Blob([str]);
    return blob.size;
}

function calculateByteSize() {
    const input = document.getElementById("textInput").value;
    const resultElement = document.getElementById("result");
    
    if (input === undefined || input === null) {
        resultElement.textContent = "Please enter a valid string.";
        resultElement.style.color = "red";
    } else {
        const size = byteSize(input);
        resultElement.textContent = `Byte Size: ${size}`;
        resultElement.style.color = "black";
    }
}

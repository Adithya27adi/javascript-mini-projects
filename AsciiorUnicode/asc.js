function detect() {
    const char = document.getElementById("charInput").value;
    const result = document.getElementById("resultBox");

    if (isASCII(char)) {
        result.innerText = "✅ The entered character is an ASCII character";
    } else {
        result.innerText = "🌐 The entered character is a UNICODE character";
    }
}

function isASCII(character) {
    return character.charCodeAt(0) <= 127;
}

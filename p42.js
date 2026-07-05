const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", function () {

    let text = textarea.value;

    if (text.length > maxChars) {
        textarea.value = text.substring(0, maxChars);
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

    let typed = textarea.value.length;
    let remaining = maxChars - typed;

    counter.textContent = typed + "/" + maxChars + " characters (" + remaining + " remaining)";
});
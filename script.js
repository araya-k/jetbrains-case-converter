function makeUpperCaseText() {
    const text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toUpperCase();
}
function makeLowerCaseText() {
    const text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toLowerCase();
}
function makeProperCaseText() {
    const text = document.getElementById("textarea").value;
    const splitSpace = text.split(' ');
    for (let i = 0; i < splitSpace.length; i++) {
        splitSpace[i] = splitSpace[i].charAt(0).toUpperCase() + splitSpace[i].slice(1).toLowerCase();
    }
    const result = splitSpace.join(' ');
    document.getElementById("textarea").value = result;
}
function makeSentenceCase() {
    const text = document.getElementById("textarea").value;
    const splitSentence = text.split('. ');
    for (let i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].slice(1).toLowerCase();
    }
    const result = splitSentence.join('. ');
    document.getElementById("textarea").value = result;
}
function download(filename) {
    const text = document.getElementById("textarea").value;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
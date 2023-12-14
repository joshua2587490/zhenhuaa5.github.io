document.addEventListener('DOMContentLoaded', function () {

    var biggerButton = document.getElementById('biggerButton');
    var textInput = document.getElementById('textInput');
    var fancyRadio = document.getElementById('fancyRadio');
    var mooButton = document.getElementById('mooButton');
    var boringBettyRadio = document.getElementById('boringBettyRadio');


    function enhanceText() {

        textInput.style.fontSize = "24pt";
    }

    function applyStyles() {
        if (fancyRadio.checked) {
            textInput.style.fontWeight = "bold";
            textInput.style.color = "blue";
            textInput.style.textDecoration = "underline";
        } else if (boringBettyRadio.checked) {
            textInput.style.fontWeight = "normal";
            textInput.style.color = "black";
            textInput.style.textDecoration = "none";
        }
    }

    function mooText() {
        var textValue = textInput.value;
        var sentences = textValue.split(". ");

        for (var i = 0; i < sentences.length; i++) {
            var words = sentences[i].split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }

        textInput.value = sentences.join(". ");
    }

    biggerButton.addEventListener('click', enhanceText);
    fancyRadio.addEventListener('change', applyStyles);
    mooButton.addEventListener('click', mooText);
    boringBettyRadio.addEventListener('change', applyStyles);
});

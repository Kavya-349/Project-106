function startClassification() {
    navigator.mainDevices.getUserMedia({ audio: ture});
    classifier.classify('https://teachablemachine.withgoogle.com/models/h1FuW3E4h/model.json', modelLoaded);
}

function modalLoaded() {
    console.log(gotResults);
}

function gotResults(error, results) {
    console.log("got result");
}
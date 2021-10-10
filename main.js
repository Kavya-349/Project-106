function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h1FuW3E4h/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) 
        console.error(error);
    else
        console.log(results);
        animal_img = document.getElementById("animal_img");

        if(results[0].label == "Bark") {
            document.getElementById("result_label").innerHTML = "Detected - " + "Dog - " + results[0].confidence.toFixed(2) + "%";
            document.getElementById("result_voice").innerHTML = "Detected voice of - " + results[0].label;
            animal_img.src = 'dog.jpg';
        }else if(results[0].label == "Cow") {
            document.getElementById("result_label").innerHTML = "Detected - " + results[0].label + " - " + results[0].confidence.toFixed(2) + "%";
            document.getElementById("result_voice").innerHTML = "Detected voice of - Mooing";
            animal_img.src = 'cow.jpg';
        }else if(results[0].label == "Meow") {
            document.getElementById("result_label").innerHTML = "Detected - " + "Cat - " + results[0].confidence.toFixed(2) + "%";
            document.getElementById("result_voice").innerHTML = "Detected voice of - " + results[0].label;
            animal_img.src = 'cat.jpg';
        }else if(results[0].label == "Roar") {
            document.getElementById("result_label").innerHTML = "Detected - " + "Lion - " + results[0].confidence.toFixed(2) + "%";
            document.getElementById("result_voice").innerHTML = "Detected voice of - " + results[0].label;
            animal_img.src = 'lion.jpg';
        }else {
            document.getElementById("result_label").innerHTML = "Detected - Background noise - " + results[0].confidence.toFixed(2) + "%";
            document.getElementById("result_voice").innerHTML = "";
            animal_img.src = 'ear.png';
        }
}
//https://teachablemachine.withgoogle.com/models/-KOup7cAi/




Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera'); 

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
    
    );
}

console.log('ml5 verstion:', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-KOup7cAi/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model is loaded noice");
    }

    function speak()
    {
        var synth=window.speechSynthesis;
        speak_data_1="the first prediction is "+prediction_1;
        speak_data_2="the second prediction is "+prediction_2;
        var utterThis =new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }

    function check()
    {
        img= document.getElementById('captured_image');
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results)
    {
if (error){
    console.error(error);
} else{
    console.log(results);
    document.getElementById("emotion_name1").innerHTML=results[0].label;
    
    prediction_1=results[0].label;
   
    speak();
    if(results[0].label=="thumbs up")
    {
        document.getElementById("emotion_name1").innerHTML=" thumbs up haha;";
    }
    if(results[0].label=="peace")
    {
        document.getElementById("emotion_name1").innerHTML="peace &#9996;";
    }
    if(results[0].label=="amazing")
    {
        document.getElementById("emotion_name1").innerHTML="amazing &#128076;";
    }


    



}
    }
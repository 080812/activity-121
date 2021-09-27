function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded)
}

function draw(){
image(video,0,0,300,300)

classifier.classify(video,gotresult)
}

function preload(){
  
}

function modelloaded(){
  console.log('model is loaded')
}

function gotresult(error,results){
  if(error){
    console.log(error)
  }
  if(results.length>0){
    console.log(results)

    document.getElementById("name").innerHTML=results[0].label
    document.getElementById("confidence").innerHTML=results[0].confidence.toFixed(3)

    
  }
}
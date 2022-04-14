var status=""
var objects=[]
function preload(){
    img1=loadImage("https://media.istockphoto.com/photos/british-shorthair-and-golden-retriever-picture-id1271494334?k=20&m=1271494334&s=612x612&w=0&h=PGULkfyEs1G58fFthrqdk_86aEBLnF2cLs5gulal1XQ=")
  }
  
  function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

  }
  function modelLoaded(){
    document.getElementById("status").innerHTML="Sttus detecting"
      console.log("Model Loaded");
      status=true ;
  }

  function gotResults(error, results){
      if(error){
        console.log(error);
      }else{
        console.log(results);
        objects=results;
      }
  }
  
  function draw(){
    image(video,0,0,400,400);

    if(status !=""){
      console.log(objects);
      objectDetector.detect(video, gotResults);
      for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status detected"
        var percent
        r=Math.floor(random(255))
g=Math.floor(random(255))
b=Math.floor(random(255))
        percent=Math.floor( objects[i].confidence * 100) ; 
     fill(r,g,b);
      text(objects[i].label+percent,objects[i].x,objects[i].y);
      noFill();
      rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
  document.getElementById("ne").innerHTML=objects.length
    }
   
  }
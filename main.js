var noseX=0;
var noseY=0;
var leftwristX=0;
var rightwristX=0;
var difference=0;

function setup(){
    canvas=createCanvas(550,550)
    canvas.position(590,100)
    video=createCapture(VIDEO);
    video.size(550,550)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("#969A97");
    document.getElementById("side").innerHTML="Width And Height Of A Square Will Be = "+difference+"px";
    fill("black");
    stroke("pink");
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("poseNet is intialised")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX= "+noseX+", noseY= "+noseY);
        
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("difference= "+difference);

    }
}
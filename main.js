function preload(){
}
function setup(){
video=createCapture(VIDEO);
video.size(550,550);
canvas=createCanvas(550,550);
canvas.position(571,150);
// Giving code for initializing poseNet model //
poseNet=ml5.poseNet(video, modelLoaded);
//Executing poseNet modle//
poseNet.on('pose',gotPoses);
}
function draw(){
background('#9f1ad6');
textSize(difference);
fill('#F0F2F5');
text('Vihan Sinha',50,400);
}
function modelLoaded(){
    // It consol's that the poseNet is intialized// 
console.log("poseNet is Initialized");
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}
}
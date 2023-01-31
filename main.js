var cargado;
var camara="";
var red_neuronal;
var objetos_encontrados_lista=[];

function preload(){
    camara=createVideo("doug_the_pug-music.mp4");
}

function setup(){
    canvas=createCanvas(270,500);
    canvas.center();
}

function reconocimiento(){
    red_neuronal=ml5.objectDetector("cocossd",detector);
    document.getElementById("esperar").innerHTML="todo listo";
}

function detector(){
    
    console.log("modelo cargado");
    camara.loop();
    camara.volume(5);
    cargado=true;
}

function mostrar(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objetos_encontrados_lista=results;
}

function draw(){
    image(camara,0,0,270,500);
    if (cargado !=""){
        objectDetector.detect(camara,mostrar);
        for (i=0;i<objetos_encontrados_lista.length;i++){
            document.getElementById("objetos_encontrados").innerHTML=objetos_encontrados_lista.length
        }
        
        

    }
}
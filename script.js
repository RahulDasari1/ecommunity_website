// counter

var num1 = setInterval(projectDone, 10)
var count1 = 3100;

function projectDone(){
    count1++;
    document.querySelector("#number1").innerHTML= count1;
    // stop condition
    if(count1 == 3500){
        clearInterval(num1);
    }
};

var num2 = setInterval(projectDone2, 10)
var count2 = 1500;

function projectDone2(){
    count2++;
    document.querySelector("#number2").innerHTML= count2;
    // stop condition
    if(count2 == 1850){
        clearInterval(num2);
    }
};

var num3 = setInterval(projectDone3, 10)
var count3 = 1800;

function projectDone3(){
    count3++;
    document.querySelector("#number3").innerHTML= count3;
    // stop condition
    if(count3 == 2100){
        clearInterval(num3);
    }
};


var num4 = setInterval(projectDone4, 10)
var count4 = 12;

function projectDone4(){
    count4++;
    document.querySelector("#number4").innerHTML= count4;
    // stop condition
    if(count4 == 350){
        clearInterval(num4);
    }
};
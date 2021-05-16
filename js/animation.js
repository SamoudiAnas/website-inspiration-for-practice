const section_titles = document.querySelectorAll(".section-title");

const section_title_1 = section_titles[0];
const section_title_2 = section_titles[1];
//SPLIT
const title_1 = section_title_1.textContent;
const text1 = title_1.split(/(\s)/);

const title_2 = section_title_2.textContent;
const text2 = title_1.split(/(\s)/);

section_title_1.textContent = "";
section_title_2.textContent = "";



for(let i = 0; i < text1.length ; i++) {
    section_title_1.innerHTML += "<span>" + text1[i] +"</span>" ;
    
}
for(let i = 0; i < text2.length ; i++) {
    section_title_2.innerHTML += "<span>" + text2[i] +"</span>" ;
    
}

let char = 0;
let char2 = 0;

    

let timer = setInterval(onTick, 250);
let timer2 = setInterval(onTick2, 1000);

function onTick(){
    let span = section_title_1.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++
    if(char === text1.length ){
        complete();
        return;
    }
}

function onTick2(){
    let span2 = section_title_2.querySelectorAll("span")[char2];
    span2.classList.add("fade");
    char2++
    if(char2 === text2.length ){
        complete2();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
    
}

function complete2(){
    clearInterval(timer2);
    timer2 = null;
    
}
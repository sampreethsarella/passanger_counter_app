let countE = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
console.log(saveEL);
let count = 0;


function increment(){
    count += 1;
    countE.textContent = count;
}

function save(){
    let countStr = count + " - ";
    saveEL.textContent  += countStr;
    countE.textContent = 0
    count=0
}


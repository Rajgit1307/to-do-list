let var1 = document.querySelector(".btn");
let var2 = document.querySelector(".dailog-box");
var1.addEventListener("click", fun1);
function fun1() {
    var2.style.display = "flex";
}
function fun3() {        //func to close dailog box
    var2.style.display = "none"
}

// to add the text in the boxes from dailog box 
let text = document.querySelector(".text");
let textarea = document.querySelector(".textArea");
let var5 = document.querySelector(".submit");
var5.addEventListener("click", fun2);
function fun2() {
    fun3()  //for closing the dailog box
    let var5 = document.querySelector(".content");
    var5.innerHTML = var5.innerHTML + `<div class="box">
<div class="box-header">
    <div class="heading">${text.value}</div>
    <div class="btn-container">
        <div class="sub">-</div>
        <div class="cut">x</div>
    </div>
</div>
<textarea class="textarea">${textarea.value}</textarea>
</div>`
    text.value = "";
    textarea.value = "";
    crossandminimize();

}

// func to close & minimize the tickets or box


function crossandminimize(){
    let cut = document.querySelectorAll(".cut");
    let minimise = document.querySelectorAll(".sub");

    for(let i = 0 ; i< cut.length; i++){

        cut[i].addEventListener("click",closeticket)
    } 
    function closeticket(e){
        let box = e.target.closest('.box')
        box.style.display = "none";
    }
    for(let i = 0 ; i<minimise.length; i++){
        minimise[i].addEventListener("click",minimiseticket)
    }
    function minimiseticket(e){
        let box1 = e.target.closest('.box');
        console.log(box1);
        let textarea = box1.querySelector(".textarea");
        console.log(textarea);
        if(textarea.style.display !== "none"){
            textarea.style.display = "none";
        }
        else{
            textarea.style.display = "flex";
        }
    }

   
}

let close_dailogbox = document.querySelector(".cross") //for closing the dailog box 
close_dailogbox.addEventListener("click", dailogclose);

function dailogclose(){
    var2.style.display = "none";
}
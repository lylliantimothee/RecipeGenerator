// action.js - actions for the index
// Author: Lyllian Timothee
// Date: 11/11/2024

// Constants

// Functions

// Open sub data
let hop = $("#holder").val();
function myFunctionFish() {
    var checkBox = document.getElementById("one");
    var text = document.getElementById("holder1");
    if (checkBox.checked == true){
        text.style.display = "block";
        console.log("hi");
    } else {
        text.style.display = "none";
    }
}
function myFunctionRice() {
    var checkBox = document.getElementById("two");
    var text = document.getElementById("holder2");
    if (checkBox.checked == true){
        text.style.display = "block";
        console.log("hi");
    } else {
        text.style.display = "none";
    }
}
function myFunctionNoo() {
    var checkBox = document.getElementById("three");
    var text = document.getElementById("holder3");
    if (checkBox.checked == true){
        text.style.display = "block";
        console.log("hi");
    } else {
        text.style.display = "none";
    }
}
function myFunctionBread() {
    var checkBox = document.getElementById("four");
    var text = document.getElementById("holder4");
    if (checkBox.checked == true){
        text.style.display = "block";
        console.log("hi");
    } else {
        text.style.display = "none";
    }
}

// show sample
// $("#sam-btn").click(function(){
//     $("#sample").toggleClass("other");
//     // if ($("#sample").hasClass("special")==false) {
//     //     console.log("fail");
//     // }
// }) 

// $(".sub-grab").click(function() {
//     $(".bread input").toggleClass("special");
//     console.log("HELLO");
// });
$(document).ready(function () {
    let menu = document.getElementById("menu");
    let menu_btn = document.getElementById("menu-btn");
    let bodyy = document.getElementById("body");
    
    function hide_and_seek(){
        if(menu.className == "hide"){
            menu.className = "drop-bar";
        }else{
            menu.className = "hide";
        }
    }
    menu_btn.addEventListener("click", hide_and_seek);

    function remove(){
        if(menu.className == "drop-bar"){
            menu.className = "hide";
            return;
        }
    }
    menu.addEventListener("click", remove);
    bodyy.addEventListener("click", remove);

    // setTimeout(() => {
    //        $("#header-left").html("World");
    //        $("#header-right").html("Wide");
    // }, 2000);

    // setTimeout(() => {
    //     $("#header-left").html("exlusive");
    //     $("#header-right").html("five");
    // }, 2000);


});
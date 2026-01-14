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


    function namechange(){
   let h_1 = document.getElementById("header-left");
   let h_2 = document.getElementById("header-right");

let name_Arr = [
    "Exclusive",
    "World",
   ]

let name_2_Arr =[
    "Five",
    "Wide"
]
   index = 0;
  setInterval(() => {
     if(index == name_Arr.length - 1){
        index = 0;
        h_1.innerHTML = name_Arr[index];
        h_2.innerHTML = name_2_Arr[index];
      }
      else{
        index += 1;
      h_1.innerHTML = name_Arr[index];
      h_2.innerHTML = name_2_Arr[index];
      }
    // if(index == name_2_Arr.length - 1){
    //     index = 0;
    //     h_2.innerHTML = name_2_Arr[index];
    //   }
    //   else{
    //     index += 1;
    //   h_2.innerHTML = name_2_Arr[index];
    //   }
   }, 3000);
}
namechange()

});
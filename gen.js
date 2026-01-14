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
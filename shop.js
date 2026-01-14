function slideshow(){
   let img_1 = document.getElementById("image-1");

let img_Arr = [
      "images/THM_4244-Edit.jpg",
      "images/THM_4348 (1).jpg"
   ]
   index = 0;
  setInterval(() => {
     if(index == img_Arr.length - 1){
        index = 0;
        img_1.src = img_Arr[index];
      }
      else{
        index += 1;
      img_1.src = img_Arr[index];
      }
   }, 2500);
}
slideshow()
//   setInterval(() => {
//      img_1.src ="images/THM_4244-Edit.jpg";
//   }, 1500);

   // document.getElementById("image-1").addEventListener("mouseleave", (() => {
   // document.getElementById("image-1").src ="images/18.png";




// document.getElementById("image-2").addEventListener("mouseover", (() => {
//    document.getElementById("image-2").src ="images/22.png";
// }));
// document.getElementById("image-2").addEventListener("mouseleave", (() => {
//    document.getElementById("image-2").src ="images/21.png";
// }));

let W = document.getElementById("WHITE");
let B_1 = document.getElementById("BLACK-1");
let G = document.getElementById("GRAY");
let B_2 = document.getElementById("BLACK-2");

function white_grid(){
     if( W.className == "white"){
      let product_info = {
         NAME: "Jesus is King Tee(White)",
         img_1: "images/18.png",
         img_2: "images/23.png",
      };
      localStorage.setItem("PRODUCTS", JSON.stringify(product_info));
      window.location.href = 'product.html';
     }
}

function black1_grid(){
     if( B_1.className == "black-1"){
      let product_info = {
         NAME: "Jesus is King Tee(black)",
         img_1: "images/21.png",
         img_2: "images/22.png",
      };
      localStorage.setItem("PRODUCTS", JSON.stringify(product_info));
      window.location.href = 'product.html';
     }
}

function gray_grid(){
     if( G.className == "gray"){
      let product_info = {
         NAME: "Jesus is King Tee(gray)",
         img_1: "images/17.png",
      };
      localStorage.setItem("PRODUCTS", JSON.stringify(product_info));
      window.location.href = 'product.html';
     }
}

function black2_grid(){
     if( B_2.className == "black-2"){
      let product_info = {
         NAME: "Jesus is King Tee(black)",
         img_1: "images/21.png",
         img_2: "images/2.png",
      };
      localStorage.setItem("PRODUCTS", JSON.stringify(product_info));
      window.location.href = 'product.html';
     }
}

W.addEventListener("click", white_grid);
B_1.addEventListener("click", black1_grid);
G.addEventListener("click", gray_grid);
B_2.addEventListener("click", black2_grid);

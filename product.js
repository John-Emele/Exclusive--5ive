$(document).ready( () => {
    function product_grid(){
      let product = localStorage.getItem("PRODUCTS");
      let my_products = JSON.parse(product);
      document.getElementById("img-1").src = my_products.img_1;
      document.getElementById("img-2").src = my_products.img_2;
    }
    product_grid();
});
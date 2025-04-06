const searchForm = document.querySelector(".search-form");

const cartItem = document.querySelector(".cart-items-container")

const menuItem = document.querySelector(".navbar")



// buttons
const searchBtn = document.querySelector("#search-btn");
const cardBtn  = document.querySelector(".cart-btn")
const menuBtn = document.querySelector("#menu-btn")


searchBtn.addEventListener("click", function(){
   searchForm.classList.toggle("active");
   document.addEventListener("click", function(e){
     if(
       !e.composedPath().includes(searchBtn) && 
       !e.composedPath().includes(searchForm) ){
        searchForm.classList.remove("active");
     }
   })
});

cardBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
      if(
        !e.composedPath().includes(cardBtn) && 
        !e.composedPath().includes(cartItem) ){
         cartItem.classList.remove("active");
      }
    })
 });

 menuBtn.addEventListener("click", function(){
    menuItem.classList.toggle("active");
    document.addEventListener("click", function(e){
      if(
        !e.composedPath().includes(menuBtn) && 
        !e.composedPath().includes(menuItem) ){
         menuItem.classList.remove("active");
      }
    })
 });
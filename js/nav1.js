var navigationIcon = document.querySelector(".navigation-icon");
var navigation = document.querySelector(".navigation");

navigationIcon.addEventListener("click",()=>{
    navigation.classList.toggle("navigation-open")
});
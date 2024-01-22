
let colorName= ["red", "#FF9933", "yellow", "green", "white","black","pink"]
let colors = document.querySelectorAll("h1");



colors.forEach((element, index)=>{
   element.addEventListener('click',()=>{
    document.body.style.backgroundColor=colorName[index];
   })
})





function move_to_orangethewiz_page()
{
    window.location.href = "https://ggjimbob.com/orangethewiz_page/index.html"
}

function move_to_recipies_page()
{
    window.location.href = "https://ggjimbob.com/recipies/index.html"
}

function move_to_chem422studio_page()
{
    window.location.href = "https://ggjimbob.com/chem422studio/index.html"
}



document.getElementById("button1").addEventListener("click", () => {
   move_to_orangethewiz_page() 
})

document.getElementById("button2").addEventListener("click", () => {
   move_to_recipies_page() 
})

document.getElementById("button3").addEventListener("click", () => {
   move_to_chem422studio_page()
})
const filterButton = document.querySelectorAll(".btns button")
const filtercard = document.querySelectorAll(".cards .single-card")


const myfilterCard = (e)=>{
    document.querySelector(".active").classList.remove("active")
e.target.classList.add("active")

filtercard.forEach(card=>{
    card.classList.add("hide")

    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide")
    }

})
}


filterButton.forEach(button=> button.addEventListener("click", myfilterCard));
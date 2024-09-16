const stars = document.querySelectorAll(".fa-star")
const emojis = document.querySelectorAll(".fa-regular")
const colors = ["red", "orrange", "lightblue", "lightgreen", "green"]

updateRating(0)

stars.forEach((stars, idx)=>{
    stars.addEventListener("click", ()=>{
        console.log("clicked", idx);
        updateRating(idx)
    })
})


function updateRating(idx) {
    stars.forEach((stars, indx)=>{
        if(indx < idx+1){
            stars.classList.add("active")
        }else{
            stars.classList.remove("active")
        }
    })
emojis.forEach((emojis)=>{
    emojis.style.transform = `translateX(-${idx*50}px)`;
    emojis.style.color = colors[idx]
})

}
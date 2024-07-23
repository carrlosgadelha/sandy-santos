(function(){
    const questionBtn = document.querySelector("#question-btn")
    const answer = document.querySelector(".answer")

    questionBtn.addEventListener("click", (e) => {
        answer.classList.toggle("show-answer")
    })
})()
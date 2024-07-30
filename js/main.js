(function(){
    const questions = document.getElementsByClassName("question-card")
    const sendBtn = document.getElementById("send-btn")

    Array.from(questions).forEach((el) => {
        let answerMargin
        el.addEventListener("click", () => {
            const answer = el.nextElementSibling
            if(answer.style.marginTop != "0px"){
                answerMargin = answer.style.marginTop
                answer.style.marginTop = "0px"
            } else {
                answer.style.marginTop = answerMargin
            }
        })
    })

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })
})()
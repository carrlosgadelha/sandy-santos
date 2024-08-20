(function(){
    const questions = document.getElementsByClassName("question-card")
    const sendBtn = document.getElementById("send-btn")
    const agendarBtn = document.getElementById("agendarBtn")
    const modal = document.querySelector("#agendarPopup")

    const dayOfModal = document.getElementById("day-of")
    const d = new Date(2024, 11,1)
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0)

    const days = []

    for(let i = 0; i <= (lastDay.getDate() - d.getDate()); i++){
        days.push(d.getDate() + i)
    }

    console.log(lastDay)

    days.forEach(function(el){
        const newDate = document.createElement("option")
        newDate.value = `day-object:${el}`
        newDate.innerHTML = `${el.toString().length == 1 ? `0${el}` : el}/${(d.getMonth() +1).toString().length <= 1 ? `0${(d.getMonth() +1)}` : d.getMonth() +1}/${d.getFullYear()}`

        dayOfModal.appendChild(newDate)
    })

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

    agendarBtn.addEventListener("click", () => {
        modal.showModal()
    })

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })
})()
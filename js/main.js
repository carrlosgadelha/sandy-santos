(function(){
    const questions = document.getElementsByClassName("question-card")
    const sendBtn = document.getElementById("send-btn")
    const agendarBtn = document.getElementById("agendarBtn")
    const modal = document.querySelector("#agendarPopup")

    const dayOfModal = document.getElementById("day-of")
    const d = new Date()
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0)
    const days = []

    const hourOfModal = document.getElementById("hour-of")
    const availableHours = ["09:00H", "10:00H", "14:00H", "16:00H"]

    availableHours.forEach((el) => {
        const newHour = document.createElement("option")
        newHour.value = `hour-object:${el[0]}${el[1]}`
        newHour.innerHTML = el

        hourOfModal.appendChild(newHour)
    })

    for(let i = 0; i <= (lastDay.getDate() - d.getDate()); i++){
        days.push(d.getDate() + i)
    }



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
        document.body.style.overflow = 'hidden'
    })

    document.body.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.body.style.overflow = ''
        }
    })

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })

    const agendarModalBtn = document.getElementById("agendarModalButton")

    agendarModalBtn.addEventListener("click", () => {
        const _name = document.getElementById("modal-name")
        const _email = document.getElementById("modal-email")
        const _contact = document.getElementById("modal-contato")
        
        alert(`Muito obrigado por agendar um serviço comigo ${_name.value}, lembre-se, chegue ao menos 5 minutinhos antes do horário para que não haja atrasos, muito obrigada.`)

        console.log(`Cliente: ${_name.value}`)
        console.log(`Email: ${_email.value}`)
        console.log(`Contato: ${_contact.value}`)
        console.log(`Dia de Atendimento: ${dayOfModal.value}`)
        console.log(`Horário de Atendimento: ${hourOfModal.value}`)

        _name.value = ""
        _email.value = ""
        _contact.value = ""


    })
})()
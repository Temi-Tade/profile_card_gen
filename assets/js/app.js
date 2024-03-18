const CREATE_MODAL = (text) => {
    document.querySelector("#modal").style.right = "10px"
    document.querySelector("#modal").animate({
        opacity: ["0", "1"]
    },
    {
        duration: 700,
    })
    document.querySelector("#modal").innerHTML = text
    setTimeout(() => {
        document.querySelector("#modal").style.right = "-500px"
        document.querySelector("#modal").animate({
            opacity: ["1", "0"]
        },
        {
            duration: 700,
        })
    }, 2500);
}

const CREATE_CARD = (e, btn) => {
    if (VALIDATE_FORM(e)) {
        CREATE_MODAL("Generating Card Preview...")
        btn.disabled = true
        setTimeout(() => {
            document.querySelector("#card-wrap").style.display = "block"
            document.querySelector("#form-wrap").style.display = "none"
        }, 2500);
        document.querySelector("#card").innerHTML = `
                <section id="card-header">
                    <div id="pic">
                        <img src=${USER_INFO.img} alt="">
                        <p id="gndr">${USER_INFO.gndr}</p>
                    </div>
                    <div id="info">
                        <h1>${USER_INFO.names}</h1>
                        <p id="card-dob"><strong><em>${USER_INFO.dob}</em></strong></p>
                    </div>
                </section>

                <section id="card-skills">
                    <div id="skills">${USER_INFO.skills}</div>
                </section>

                <section id="contact">
                    <div id="mail">${USER_INFO.mail}</div>
                    <div id="phone">${USER_INFO.phone}</div>
                </section>

                <section id="card-bio">
                    <div id="bio">${USER_INFO.bio}</div>
                </section>
        `
    } else {
        return
    }
}

const BACK_TO_FORM = () => {
    document.querySelector("#card-wrap").style.display = "none"
    document.querySelector("#form-wrap").style.display = "block"
    document.querySelector("#btn-wrap button").disabled = false
}
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

const CREATE_CARD = (e) => {
    if (VALIDATE_FORM(e)) {
        document.querySelector("#card").innerHTML = `
            <section id="card-header">
                <div id="pic">
                    <img src="" alt="">
                </div>
                <div id="info">
                    <h1>${USER_INFO.names}</h1>
                    <p id="gndr">${USER_INFO.gndr}</p>
                </div>
            </section>

            <section id="contact">
                <div id="mail">${USER_INFO.mail}</div>
                <div id="phone">${USER_INFO.phone}</div>
            </section>

            <section id="skills-bio">
                <div id="skills">${USER_INFO.skills}</div>
                <div id="bio">${USER_INFO.bio}</div>
            </section>
        `
        new ProfileCard(USER_INFO).create()
    } else {
        return
    }
}
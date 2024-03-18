const VALIDATE_FORM = (e) => {
    e.preventDefault()

    INPUTS.forEach(val => {
        USER_INFO[`${val.id}`] = val.value.trim()
    })

    if (document.querySelector("#img").value === "") {
        USER_INFO.img = "/assets/images/default_user.png"
    }

    if (Object.values(USER_INFO).includes("") || Object.values(USER_INFO).includes(undefined)) {
        CREATE_MODAL("All fields are required")
        return false
    } else {
        console.log(USER_INFO)
        return true
    }
}

const UPLOAD_IMG = (img) => {
    let imgFile = img.files
    let loadedFile = imgFile[0]
    let f = new FileReader()
    f.onload = (ev) => {
        USER_INFO.img = ev.target.result
    }
    f.readAsDataURL(loadedFile)
}
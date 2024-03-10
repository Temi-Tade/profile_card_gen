const VALIDATE_FORM = (e) => {
    e.preventDefault()

    INPUTS.forEach(val => {
        USER_INFO[`${val.id}`] = val.value
    })

    if (Object.values(USER_INFO).includes("") || Object.values(USER_INFO).includes(undefined)) {
        alert("All fields are required")
    } else {
        //do somethingg
    }
    console.log(USER_INFO)
}
const VALIDATE_FORM = (e) => {
    e.preventDefault()

    INPUTS.forEach(val => {
        USER_INFO[`${val.id}`] = val.value.trim()
    })

    if (Object.values(USER_INFO).includes("") || Object.values(USER_INFO).includes(undefined)) {
        CREATE_MODAL("All fields are required")
        return false
    } else {
        console.log(USER_INFO)
        return true
    }
}
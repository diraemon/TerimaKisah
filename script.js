function handleGetFormData () {
    let name = document.getElementById("name").value
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked

    return {name, city, email, zipCode, status}

    const isNumber = (input) => !isNaN(input)

    const checkboxIsChecked = () => handleGetFormData().status;

function validateFormData(objek) {
    return objek !== null && isNumber(objek.zipCode) && checkboxIsChecked()
}

    
    function submit() {
        const warning = document.getElementById("warning");
        const formData = handleGetFormData();

        if(validateFormData(formData) === false) {
            return warning.textContent = "Periksa form anda sekali lagi";
        } else {
            return warning.textContent = "";
        }
    }

    document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault();
    submit()
})

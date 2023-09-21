// Tambahkan kode JavaScript kalian di file ini
//nomor 6
function handleGetFormData () {
    let name = document.getElementById("name").value
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked

    return {name, city, email, zipCode, status};
}

//nomor 7
    const isNumber = (input) => !isNaN(input)

//nomor 8
    const checkboxIsChecked = () => handleGetFormData().status;

//nomor 9
function validateFormData(objek) {
    return objek !== null && isNumber(objek.zipCode) && checkboxIsChecked()
}
//nomor 10
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

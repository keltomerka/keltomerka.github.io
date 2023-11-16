//вітальня сторінка, реєстрація
const btnSing = document.getElementById("btn-sing")
const inputs = document.querySelectorAll(".welInp")
btnSing.addEventListener("click", () => {
    const modal = document.getElementById("modal")
    modal.classList.add("displayFlex")
})
const btnClose = document.getElementById("btnClose")
btnClose.addEventListener("click", () => {
    modal.classList.remove("displayFlex")
})
const btnCreate = document.getElementById("btnCreate")
btnCreate.addEventListener("click", () => {
    const checkPhone = /^0\d{9}/;
    const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const userName = inputs[0].value;
    const email = inputs[1].value;
    const tel = inputs[2].value;
    const passwrd = inputs[3].value;
    
    if (!checkEmail.test(email)) {
        alert("Email entered incorrectly! Please checked format.");
    } else if (!checkPhone.test(tel)) {
        alert("Phone number entered incorrectly! Please enter as 0*********.");
    } else {
        window.open("mainPage.html");
        window.close("welcomePage.html");
        localStorage.setItem("userName", userName);
        localStorage.setItem("email", email);
        localStorage.setItem("tel", tel);
        localStorage.setItem("passwrd", passwrd);
    }

   
    
})


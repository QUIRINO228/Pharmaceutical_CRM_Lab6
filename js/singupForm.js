const firstNameInput = document.getElementById("firstName")
const firstNameError = document.getElementById("firstNameError")
const singUpBtn = document.getElementById("singUp")
const secondNameInput = document.getElementById("secondName")
const secondNameError = document.getElementById("secondNameError")
const surnameInput = document.getElementById("surname")
const surnameError = document.getElementById("surnameError")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("emailError")
const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("passwordError")
const matchedPassword = document.getElementById("matchedPassword")
const matchedPasswordError = document.getElementById("matchedPassError")
const file = document.getElementById("file")
const fileLabel = document.getElementById("fileLabel")
const visibilityIcon = document.getElementById('passVisibility');
const matchPassVisibility = document.getElementById('matchPassVisibility');

visibilityIcon.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        visibilityIcon.innerHTML = 'visibility';
    } else {
        passwordInput.type = 'password';
        visibilityIcon.innerHTML = 'visibility_off';
    }
});

matchPassVisibility.addEventListener('click', function () {
    if (matchedPassword.type === 'password') {
        matchedPassword.type = 'text';
        matchPassVisibility.innerHTML = 'visibility';
    } else {
        matchedPassword.type = 'password';
        matchPassVisibility.innerHTML = 'visibility_off';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.getElementById('phone');
    new IMask(phoneInput, {
        mask: '+38(000) 000-00-00'
    });
});

matchedPassword.addEventListener("input", function () {
    if (matchedPasswords(matchedPassword.value, passwordInput.value)) {
        matchedPasswordError.style.display = "none"
    }
});

matchedPassword.addEventListener("blur", function () {
    if (!matchedPasswords(matchedPassword.value,  passwordInput.value)) {
        matchedPasswordError.style.display = "block"
    }
});

file.addEventListener("change", function () {
    fileLabel.innerHTML = "File saved";
});

passwordInput.addEventListener("input", function () {
    if (validatePasswordAndToggle(passwordInput.value)) {
        passwordError.style.display = "none"
    }
});

passwordInput.addEventListener("blur", function () {
    if (!validatePasswordAndToggle(passwordInput.value)) {
        passwordError.style.display = "block"
    }
});

function validatePasswordAndToggle(password) {
    if (password.length >= 8) {
        singUpBtn.disabled = false;
        return true
    } else {
        singUpBtn.disabled = true;
        return false
    }
}


emailInput.addEventListener("blur", function () {
    if (!validateEmail(emailInput.value)) {
        emailError.style.display = "block"
    }
})

emailInput.addEventListener("input", function () {
    if (!validateName(emailInput.value)) {
        emailError.style.display = "none";
    }
})


firstNameInput.addEventListener("blur", function () {
    if (!validateName(firstNameInput.value)) {
        firstNameError.style.display = "block"
    }
})


firstNameInput.addEventListener("input", function () {
    if (validateName(firstNameInput.value)) {
        firstNameError.style.display = "none";
    }
});

secondNameInput.addEventListener("blur", function () {
    if (!validateName(secondNameInput.value)) {
        secondNameError.style.display = "block"
    }
})

secondNameInput.addEventListener("input", function () {
    if (validateName(secondNameInput.value)) {
        secondNameError.style.display = "none";
    }
});


surnameInput.addEventListener("blur", function () {
    if (!validateName(surnameInput.value)) {
        surnameError.style.display = "block"
    }
})

surnameInput.addEventListener("input", function () {
    if (validateName(surnameInput.value)) {
        surnameError.style.display = "none";
    }
});

function validateName(firstName) {
    if (firstName === "") {
        return false;
    }
    if (!/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ]+/.test(firstName) && firstName.length >= 2) {
        singUpBtn.disabled = false
        return true
    }
    singUpBtn.disabled = true
    return false
}

function validateEmail(email) {
    if (email === "") {
        return false;
    }
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        singUpBtn.disabled = false
        return true
    }
    singUpBtn.disabled = true
    return false
}

function matchedPasswords(password, matchedPassword) {
    if (password === matchedPassword) {
        singUpBtn.disabled = false;
        return true;
    }
    singUpBtn.disabled = true;
    return false;
}




emailCorrect = false
nameCorrect = false

let nameInput = document.getElementById("name");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementById("name-helper");

nameInput.addEventListener('change', function (e) {
    let valor = e.target.value
    if (valor.length < 3) {
        nameInput.classList.add('error')
        nameHelper.classList.add('visible')
        nameInput.classList.remove('correct')
        nameHelper.innerText = 'Seu Nome deve ter 3 ou mais caracteres'
    } else {
        nameInput.classList.remove('erro')
        nameHelper.classList.remove('visible')
        nameInput.classList.add('correct')
        nameCorrect = true
    }
})

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopup(input, label) {
    input.addEventListener('focus', function () {
        label.classList.add('required-popup')
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', function () {
        label.classList.remove('required-popup')
    })
}

mostrarPopup(nameInput, nameLabel)
mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener('change', function (e) {
    let valor = e.target.value

    if (valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
        emailCorrect = true

    } else {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailInput.classList.remove('correct')
        emailHelper.innerText = 'Email invalido!'
    }
})


function Redirecionar() {
    if (emailCorrect == true && nameCorrect == true) {
        window.location.href = "agradecimento.html";
        setTimeout(alert('Mensagem enviada'), 1000);
    }
}



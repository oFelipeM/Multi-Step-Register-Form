// 1 Part Form
const registerForm = document.getElementById('registerForm')
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const btn1 = document.getElementById('btn1')
// 2 Part Form
const optionsForm = document.getElementById('optionsForm')
// 3 Part Form
const divLastPart = document.getElementById('divLastPart')
const nameResult = document.getElementById('nameResult')
const emailResult = document.getElementById('emailResult')
const topicResult = document.getElementById('topicResult')
// Steps
const firstStep = document.getElementById('firstStep')
const secondStep = document.getElementById('secondStep')
const thirdStep = document.getElementById('thirdStep')
// step-progression
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progress-bar");
const stepsText = document.getElementById('stepsText');


let currentStep = 0;


registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    optionsForm.style.display = 'block'
    registerForm.style.display = 'none'
    firstStep.style.background = 'blue'
    stepsText.innerHTML = `Step 2 of 3`

    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgress();
    }

    function updateProgress() {
        progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }
})
optionsForm.addEventListener('submit', function (event) {
    const selectedTopic = document.querySelector('input[name="topic"]:checked');
    event.preventDefault();
    optionsForm.style.display = 'none'
    divLastPart.style.display = 'block'

    stepsText.innerText = `Step 3 of 3`
    nameResult.textContent = `Name: ${userName.value}`
    emailResult.textContent = `Email: ${userEmail.value}`
    topicResult.textContent = `${selectedTopic.value}`

    setTimeout(function () {
        alert('✅ Success!')
    }, 350);

    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgress();
    }

    function updateProgress() {
        progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;

        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }
})
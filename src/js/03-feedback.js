const form = document.querySelector('form');
const inputEmail = document.querySelector("input");
const textArea = document.querySelector('textarea');
const button = document.querySelector('button')
let obj = {
        email: '',
        message: ''
    }

var throttle = require('lodash.throttle');


try {
    const parsedObj = JSON.parse(localStorage.getItem('feedback-form-state'))
    inputEmail.value = parsedObj.email
    textArea.textContent = parsedObj.message 
} catch (error) {}



const onInput = evt => {
    if (evt.target.type === 'email') {
        obj.email = evt.target.value
    } else {obj.message = evt.target.value}
    
    localStorage.setItem('feedback-form-state', JSON.stringify(obj))
}

const onSubmit = evt => {
    evt.preventDefault()
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear()

    inputEmail.value = ''
    textArea.textContent = ''
}



form.addEventListener('submit', onSubmit)

form.addEventListener('input', throttle(onInput, 500))








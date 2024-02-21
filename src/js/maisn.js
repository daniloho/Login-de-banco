let formSignin = document.querySelector('#signin')
let formSignup = document.querySelector('#signup')
let botaoCor = document.querySelector('.botao-cor')



document.querySelector('#btSignin').addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    botaoCor.style.left = "0px"
})



document.querySelector('#btSignup').addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    botaoCor.style.left = "110px"
})
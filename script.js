function menu (){
    let menuMobile = document.querySelector('ul')
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else {
        menuMobile.classList.add('open')
    }
}





const botaoLogin = document.querySelector('.login')
const modalLogin = document.querySelector('dialog')
const fecharModal = document.querySelector('.x-login') 

botaoLogin.onclick = function(){
    modalLogin.showModal()
}

fecharModal.onclick = function(){
    modalLogin.close()
}


const botaoMatricular = document.querySelector('.matricular-buttom')
const modalMatricular = document.querySelector('.dialog2')
const fecharModal1 = document.querySelector('.x-login1') 

botaoMatricular.onclick = function(){
    modalMatricular.showModal()
}

fecharModal1.onclick = function(){
    modalMatricular.close()
}


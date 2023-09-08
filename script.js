const imagem =document.querySelector('img')
const fundo = document.querySelector("main")
const h1 = document.querySelector("h1")

function ligar(){
    imagem.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/ligada.jpg'
    fundo.style.background = "#ffffff"
    h1.style.color = "#000000"
    imagem.style.transform = "rotate(0deg)"
}

function desligar(){
    imagem.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/desligada.jpg'
    fundo.style.background = "#000000"
    h1.style.color = "#ffffff"
    imagem.style.transform = "rotate(0deg)"
}
function quebrar(){
    imagem.src = "https://encurtador.com.br/aghm2"
    imagem.style.transform = "rotate(180deg)"
}
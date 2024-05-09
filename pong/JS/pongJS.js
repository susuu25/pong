//const canvas = document.getElementById('canvas')

const canvas = document.querySelector('#canvas')

const quadro = canvas.getContext('2d')

quadro.fillStyle = 'grey'
let player1 ={
    px:80,
    py:260,
    tamanho:30,
    largura:200,
}

let player2 = {
    px:1165,
    py:260,
    tamanho:30,
    largura:200,
}

let bolinha = {
    px:622,
    py:345,
    tamanho:30,
    largura:30,
    dir:8,
}

quadro.fillStyle = 'black'
quadro.font ='30px verdana'
let pts1 = 0
let pts2 = 0
let score1 = quadro.fillText(`score 1: ${pts1}`, 130,50)
let score2 = quadro.fillText(`score 2: ${pts2}`, 1000,50)

function moverBolinha(){
    bolinha.px += bolinha.dir

    if(bolinha.px > 1165){
        bolinha.dir *= -1
    }
    else if(bolinha.px < 80){
        bolinha.dir *= -1
    }
}

function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tamanho,player1.largura)
    quadro.fillRect(player2.px,player2.py,player2.tamanho,player2.largura)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tamanho,bolinha.largura)
}

function main(){
    quadro.clearRect(0,0,1280,720) //limpar todo o meu objeto canvas 
    draw() //desenha de novo
    moverBolinha() //chame a função que irá mudar a posição da bolinha
}

setInterval(main, 10)
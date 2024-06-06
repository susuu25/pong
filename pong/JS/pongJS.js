//const canvas = document.getElementById('canvas')

const canvas = document.querySelector('#canvas')

const quadro = canvas.getContext('2d')

quadro.fillStyle = 'grey'
let player1 ={
    px:80, //posição em x do jogador
    py:260, //posição em y do jogador
    tamanho:30, //largura do jogador no eixo x
    largura:200, //altura do jogador no eixo y
    dir:0, //direção
}

let player2 = {
    px:1165, //posição em x do jogador
    py:260, //posição em y do jogador
    tamanho:30, //largura do jogador no eixo x
    largura:200, //altura do jogador no eixo y
    dir:0, //direção
}

let bolinha = {
    px:622,
    py:345,
    tamanho:30, //largura da bolinha no eixo x
    largura:30, // altura da bolinha no eixo y
    dir:8, // direção
    dirY:2,
}

quadro.fillStyle = 'white' //cor do elemento player 1 e 2 e do texto colocado
quadro.font ='30px verdana'
let pts1 = 0
let pts2 = 0


document.addEventListener('keydown', function(e){//quando eu clicar no meu documento, ele irá chamar uma função
    if(e.keyCode === 87){
        player1.dir = -7; //atribui um valor à direção
    }
    else if(e.keyCode === 83){
        player1.dir = 7;
    }
    if(e.keyCode === 38){
        player2.dir = -7;
    }
    else if(e.keyCode === 40){
        player2.dir = 7;
    }
})

document.addEventListener('keyup', function(e){//quando eu clicar no meu documento, ele irá chamar uma função
    if(e.keyCode === 87){
        player1.dir = 0;
    }
    else if(e.keyCode === 83){
        player1.dir = 0;
    }
    if(e.keyCode === 38){
        player2.dir = 0;
    }
    else if(e.keyCode === 40){
        player2.dir = 0;
    }
})

function moverPlayer1(){
    if(player1.py < 5){
        player1.py = 5
    }

    else if(player1.py > 515){
        player1.py = 515
    }

    player1.py += player1.dir
}

function moverPlayer2(){
    if(player2.py < 5){
        player2.py = 5
    }

    else if(player2.py > 515){
        player2.py = 515
    }

    player2.py += player2.dir
}

function moverBolinha(){
    bolinha.px += bolinha.dir
    bolinha.py += bolinha.dirY
}

function colisaoBolinha(){
    if(bolinha.py + bolinha.largura >= player2.py && bolinha.py <= player2.py + player1.largura && bolinha.px >= player2.px - player2.tamanho){
        bolinha.dir *= -1

    }
    else if(bolinha.py + bolinha.largura >= player1.py && bolinha.py <= player1.py + player1.largura && bolinha.px <= player1.px + player1.tamanho){
        bolinha.dir *= -1
    }
}

function pontos(){
    if(bolinha.px < -100){
    bolinha.px = 625
    bolinha.py = 345
    bolinha.dir *= -1
    pts2++
    }

    else if(bolinha.px > 1400){
        bolinha.px = 625
        bolinha.py = 345
        bolinha.dir *= -1
        pts1++
    }
}

function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tamanho,player1.largura)
    quadro.fillRect(player2.px,player2.py,player2.tamanho,player2.largura)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tamanho,bolinha.largura) //fillRect desenha
    quadro.fillText(`Pontos 1: ${pts1}`, 220,50) 
    quadro.fillText(`Pontos 2: ${pts2}`, 880, 50) // fillText escreve
}

function main(){
    quadro.clearRect(0,0,1280,720) //limpar todo o meu objeto canvas 
    draw() //desenha de novo
    moverBolinha() //chame a função que irá mudar a posição da bolinha
    colisaoBolinha()
    pontos()
    moverPlayer1()
    moverPlayer2()
}

setInterval(main, 10)
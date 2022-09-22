var jogador, nave1, nave2, coreV1, coreV2, coreV3, coracaoVazio,  tiro, explosao, fundo;
var jogadorImg, nave1Img, nave2Img, coracaoImg, coracaoVazioImg, tiroImg, explosaoImg, fundoImg;

function preload(){
    jogadorImg = loadImage("spacebattle_06.png");
    nave1Img = loadImage("retroship_12.png");
    nave2Img = loadImage("retroship_13.png");
    coracaoImg = loadImage("retro_red_heart.png");
    coracaoVazioImg = loadImage("retro_empty_heart.png");
    tiroImg = loadImage("retro_coin.png");
    explosaoImg = loadImage("retro_purple_burst.png");
    fundoImg = loadImage("Imported piskel.png");
}

function setup(){
    createCanvas(400, 400);
    fundo = createSprite(200, 200);
    fundo.addImage(fundoImg)
    jogador = createSprite(75, 200)
    jogador.addImage(jogadorImg);
    jogador.scale = 0.2;
    coreV1 = createSprite(300, 15);
    coreV1.addImage(coracaoImg)
    coreV1.scale = 0.15
    coreV2 = createSprite(330, 15);
    coreV2.addImage(coracaoImg)
    coreV2.scale = 0.15
    coreV3 = createSprite(360, 15);
    coreV3.addImage(coracaoImg)
    coreV3.scale = 0.15

}

function draw(){
    if(keyDown("w")){
        jogador.y -= 5
    }else if(keyDown("s")){
        jogador.y += 5
    }
    if(keyDown("e")){
        gerarTiro();
    }
    gerarInimigos();
    drawSprites();
}

function gerarTiro(){
    if(frameCount%5 === 0){
        tiro = createSprite(110, jogador.y);
        tiro.addImage(tiroImg);
        tiro.scale = 0.1;
        tiro.velocityX = 4
        
    }
    
}

function gerarInimigos(){
    if(frameCount%110 === 0){
        nave1 = createSprite(420, random(30, 380))
        nave1.addImage(nave1Img);
        nave1.scale = 0.1;
        nave1.velocityX = -2
    } 
    if(frameCount%110 === 0){
        nave2 = createSprite(420, random(30, 380))
        nave2.addImage(nave2Img);
        nave2.scale = 0.1;
        nave2.velocityX = -2  
    } 
}






    

let nomeXpHeroi = [
    ["Bulma" , 700],
    ["Kuririn" , 1001],
    ["Tenshinhan" , 2001],
    ["Piccolo" , 5001],
    ["Gohan" , 7025],
    ["Vegeta" , 8001],
    ["Trunks" , 9002],
    ["Goku" , 10500]
]

for (let cont = 0; cont <8; cont ++){
    switch (true) {
        case nomeXpHeroi[cont][1] <= 1000 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1] + " pontos de XP, o que o classifca no nivel Ferro");
            break
        case nomeXpHeroi[cont][1] >= 1001 && nomeXpHeroi[cont][1] < 2001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1]  + " pontos de XP, o que o classifca no nivel Bronze");
            break
        case nomeXpHeroi[cont][1]  >= 2001 && nomeXpHeroi[cont][1] < 5001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1]  + " pontos de XP, o que o classifca no nivel Prata");
            break
        case nomeXpHeroi[cont][1]  >= 5001 && nomeXpHeroi[cont][1] < 7001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1] + " pontos de XP, o que o classifca no nivel  Ouro");
            break
        case nomeXpHeroi[cont][1]  >= 7001 && nomeXpHeroi[cont][1] < 8001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1]  + " pontos de XP, o que o classifca no nivel Platina");
            break
        case nomeXpHeroi[cont][1]  >= 8001 && nomeXpHeroi[cont][1] < 9001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1]  + " pontos de XP, o que o classifca no nivel Ascendente");
            break
        case nomeXpHeroi[cont][1]  >= 9001 && nomeXpHeroi[cont][1] < 10001 :
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] +" possui " + nomeXpHeroi[cont][1]  + " pontos de XP, o que o classifca no nivel Imortal");
        break
        case nomeXpHeroi[cont][1]  >= 10001:
            console.log("O Herói de nome " + nomeXpHeroi[cont][0] + " possui " + nomeXpHeroi[cont][1] +" pontos de XP, o que o classifca no nivel Radiante`");
            break
    }
}
let nomeDoHeroi = "Link";
let quantidadeDeXp = 2001;
let classificaoDoHeroi = "";


if(quantidadeDeXp < 1000){
   classificaoDoHeroi = "Ferro";
} else if (quantidadeDeXp < 2001){
    classificaoDoHeroi = "Bronze";
} else if (quantidadeDeXp < 5001){
    classificaoDoHeroi = "Prata";
} else if (quantidadeDeXp < 7001 ){
    classificaoDoHeroi = "Ouro";
} else if (quantidadeDeXp < 8001){
    classificaoDoHeroi = "Platina";
} else if (quantidadeDeXp < 9001){
    classificaoDoHeroi = "Ascendente";
} else if (quantidadeDeXp < 10001){
    classificaoDoHeroi = "Imortal";
} else if (quantidadeDeXp >= 10001){
    classificaoDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + classificaoDoHeroi);
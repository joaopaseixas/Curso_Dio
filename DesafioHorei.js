
function classificarHeroi(nome, xp) {
    let nivel;

    if (xp >= 10001) {
        nivel = "Radiante";
    } else if (xp >= 9001) {
        nivel = "Imortal";
    } else if (xp >= 8001) {
        nivel = "Ascendente";
    } else if (xp >= 7001) {
        nivel = "Platina";
    } else if (xp >= 5001) {
        nivel = "Ouro";
    } else if (xp >= 2001) {
        nivel = "Prata";
    } else if (xp >= 1001) {
        nivel = "Bronze";
    } else {
        nivel = "Ferro";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

const nomeHeroi = "Maria Betania";
const xpHeroi = 7500;

classificarHeroi(nomeHeroi, xpHeroi);

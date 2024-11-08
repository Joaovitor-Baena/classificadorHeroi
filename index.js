let herois = ["Nébula Prisma", "Ecos da Eternidade", "Arqueiro Fantasma", "Maré Luminescente", "Guardião Espectral", "Astrael Serafim"];
let xpHeroi = [ 1500, 3500, 6000, 7500, 9500, 11000]; 

let i = 0;
while (i < herois.length) {
    let nome = herois[i];
    let xp = xpHeroi[i];
    let nivel;

    switch (true) {
        case xp <= 1000:
            nivel = "Ferro";
            break;

        case xp > 1000 && xp <= 2000:
            nivel = "Bronze";
            break;

        case xp > 2000 && xp <= 5000:
            nivel = "Prata";
            break;

        case xp > 5000 && xp <= 7000:
            nivel = "Ouro";
            break;

        case xp > 7000 && xp <= 8000:
            nivel = "Platina";
            break;

        case xp > 8000 && xp <= 9000:
            nivel = "Ascendente";
            break;

        case xp > 9000 && xp <= 10000:
            nivel = "Imortal";
            break;

        case xp > 10000:
            nivel = "Radiante";
            break;
    }

    i++

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}!`)
    // console.log("O Herói " + nome + " está no nível de " + nivel + "!");
    
}

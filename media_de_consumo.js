const consumo = [
    [100, 120, 110, 90, 105, 115, 130, 125, 135, 140, 120, 110],    // 2010
    [105, 115, 125, 95, 100, 110, 120, 130, 140, 145, 125, 115],    // 2011
    [110, 125, 130, 100, 105, 115, 125, 135, 145, 150, 130, 120],   // 2012
    [115, 130, 135, 105, 110, 120, 130, 140, 150, 155, 135, 125],   // 2013
    [120, 135, 140, 110, 115, 125, 135, 145, 155, 160, 140, 130],   // 2014
    [125, 140, 145, 115, 120, 130, 140, 150, 160, 165, 145, 135],   // 2015
    [130, 145, 150, 120, 125, 135, 145, 155, 165, 170, 150, 140],   // 2016
    [135, 150, 155, 125, 130, 140, 150, 160, 170, 175, 155, 145],   // 2017
    [140, 155, 160, 130, 135, 145, 155, 165, 175, 180, 160, 150],   // 2018
    [145, 160, 165, 135, 140, 150, 160, 170, 180, 185, 165, 155],   // 2019
];


const meses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

let consumoMedioPorMes = Array(12).fill(0);

for (let i = 0; i < consumo.length; i++) {
    for (let j = 0; j < consumo[i].length; j++) {
        consumoMedioPorMes[j] += consumo[i][j];
    }
}

for (let i = 0; i < consumoMedioPorMes.length; i++) {
    consumoMedioPorMes[i] /= consumo.length;
    console.log(`Consumo médio em ${meses[i]}: ${consumoMedioPorMes[i]}`);
}

let maiorConsumo = 0;
let mesAnoMaiorConsumo = "";

for (let i = 0; i < consumo.length; i++) {
    for (let j = 0; j < consumo[i].length; j++) {
        if (consumo[i][j] > maiorConsumo) {
            maiorConsumo = consumo[i][j];
            mesAnoMaiorConsumo = `${meses[j]} de ${2010 + i}`;
        }
    }
}

console.log(`Mês/Ano com maior consumo: ${mesAnoMaiorConsumo} - ${maiorConsumo} kWh`);
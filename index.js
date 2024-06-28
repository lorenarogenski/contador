const prompt = require('prompt-sync')({sigint: true});

let historia = prompt("Digite a sua história e descubra o número de palavras existentes: ");

let palavras = historia.split('');

let numeroPalavras = palavras.length;

let frequenciaPalavras = {};

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i].toLowerCase();

    palavra = palavra.replace(/[.,!?;:()]/g, '');

    if (frequenciaPalavras[palavra]) {
        frequenciaPalavras[palavra]++;
    } else {
        frequenciaPalavras[palavra] = 1;
    }

}

console.log(`Número total de palavras: ${numeroPalavras}`);

console.log('Frequência das palavras:');
for (let palavra in frequenciaPalavras) {
    console.log(`${palavra}: ${frequenciaPalavras[palavra]}`);
}
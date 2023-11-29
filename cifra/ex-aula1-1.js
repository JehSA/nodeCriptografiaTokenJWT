// Ex. 1
const mensagem = "A";
let codAscii = mensagem.charCodeAt(0);
console.log(codAscii); // 65

// Ex. 2
const mensagem2 = "a";
let codAscii2 = mensagem2.charCodeAt(0);
console.log(codAscii2); // 97

// Ex. 3
const mensagem3 = "ALURA";
for (let i = 0; i < mensagem3.length; i++) {
 console.log(mensagem3.charCodeAt(i));
}

// Ex. 4
const mensagemDecimal = String.fromCharCode(65, 76, 85, 82, 65);
console.log(mensagemDecimal);

// Ex. 5
const mensagemHexa = String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41);
console.log(mensagemHexa);
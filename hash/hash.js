import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("uma String Qualquer"));


class Usuario {

    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!");
            return true;
        }
        console.log("Usuário ou senha incorretos.");
        return false;
    }

}

const usuario = new Usuario('Jeh', 'gerson123');
console.log(usuario);

// Caso de sucesso
usuario.autentica('Jeh', 'gerson123');

// Casos de fracasso
usuario.autentica('Jehf', 'gerson123');
usuario.autentica('Jeh', 'gerson1234');
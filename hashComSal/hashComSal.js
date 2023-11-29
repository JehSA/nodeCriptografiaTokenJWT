import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`

}

class Usuario {

    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash ]= criaHashComSal(senha).split(':');
    }

    autentica(nome, senha) {
        if(nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorresponderm = timingSafeEqual(testeHash, hashReal);
            if(hashesCorresponderm) {
                console.log("Usuário autenticado com sucesso!");
                return true;
            }
        }
        console.log("Usuário ou senha incorretos.");
        return false;
    }

}

const jm = new Usuario('Jef', 'senha123');
console.log(jm);


 // Teste de sucesso
jm.autentica('Jef', 'senha123');

// Testes de insucesso
jm.autentica('Jef55', 'senha123');
jm.autentica('Jef', '55senha123');
let arrayNumSorteados = [];
let limiteMaxElementos = 10; 
let numSecreto = gerarNumeroRandom();
let tentativas = 1; 

//Função sem Retorno e com Parametro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Nº Secreto');
    exibirTextoNaTela('p','Bem vindo, digite um número entre 1 e 10');
}

exibirMensagemInicial();

//Função Sem Parametors e Sem Retorno
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msmTentativas = ('p',`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela('p', msmTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if( chute > numSecreto ){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

//Função com Retorno e Sem Parametro
function gerarNumeroRandom() {
    let numEscolhido = parseInt(Math.random() * limiteMaxElementos + 1);
    let quantidadeElementosArray = arrayNumSorteados.length;

    if (quantidadeElementosArray == limiteMaxElementos){
        arrayNumSorteados = [];
    }

    if (arrayNumSorteados.includes(numEscolhido)){
        return gerarNumeroRandom();
    }   else {
        arrayNumSorteados.push(numEscolhido);
        console.log(arrayNumSorteados);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumeroRandom();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
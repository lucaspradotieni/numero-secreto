let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Exibe o texto Inicial na tela
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//Verificar se Chute está certo ou não, e fala se está > ou <
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

//Gera o Número Secreto de 1 à 10 e faz eles não se repetirem
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
if (quantidadeDeElementosNaLista == 10) {
    listaDeNumerosSorteados = []
}
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio;
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido
   }
}

//Limpar o espaço do chute
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Recomeçar jogo após acertar
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
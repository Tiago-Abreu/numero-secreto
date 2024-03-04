//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor!');
        }else{
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(listaDeNumerosSorteados)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}







//function exibirOla() {
//    console.log('Olá mundo');
//}
//exibirOla();

//function exibirOlaNome(nome) {
//    console.log(`Olá, ${nome}!`);
//}

//exibirOlaNome('Tiago');

//function retornaDobro(numero) {
//    return numero * 2;
//}
//let resultadoDobro = retornaDobro(5);
//console.log(resultadoDobro);

//function retornaMedia(numero1,numero2,numero3) {
//    return (numero1 + numero2 + numero3)/3;
//}
//let resultadoMedia = retornaMedia(70,15,5);
//console.log(resultadoMedia);


//function retornaMaior(a,b) {
//    return a > b ? a : b;
//}
//let numeroMaior = retornaMaior(30,10);
//console.log(numeroMaior);


//function retornaMultiplicacao(numero) {
//    return numero * numero;
//}
//let resultadoMultiplicacao = retornaMultiplicacao(10);
//console.log(resultadoMultiplicacao);

//let listaGenerica = [];
//console.log(listaGenerica);
//let linguagensDeProgramacao = ['JavaScript' , 'C' , 'C++' , 'Kotlin' , 'Python'];
//linguagensDeProgramacao.push('Java' , 'Ruby' , 'GoLang');
//console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);


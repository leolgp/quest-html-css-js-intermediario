/*
    quando clicar na seta pra avançar temos que 
    esconder todas as imagens e mostrar a próxima imagem
    
    a imagem atual começa em 0 pq é a primeira imagem 
        
    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem

    esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar 
        
    mostrar a próxima imagem 
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe 
            mostrar nela
*/


const imagensPainel = document.querySelectorAll('.imagem-painel');
//console.log(imagensPainel);
// verifico q tenho uma lista com 4 imagens (Nodelist(4))
// .imagem-painel (peguei tudo que tem a CLASSE imagem-painel, o ponto simboliza a classe do css)

const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
setaVoltar.classList.add('apagada');



function esconderImagens() {
    // pegar todas as imagens usando o DOM e remover a classe mostrar de todas
    mudandoTexto()
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    // pegar todas as imagens, descobrir qual é a próxima, e colocar a classe 
    // mostrar nela
    mudandoTexto()
    imagensPainel[imagemAtual].classList.add('mostrar');
}



/*
    quando clicar na seta pra avançar temos que 
    esconder todas as imagens e mostrar a próxima imagem 
*/
setaAvancar.addEventListener('click', function() {
    setaVoltar.classList.remove('apagada');

    // testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;

    if(imagemAtual === totalDeImagens - 1) {
        setaAvancar.classList.add('apagada');
    }

    if(imagemAtual === totalDeImagens) {
        return;
    }
  
    // a imagem atual começa em 0 pq é a primeira imagem 
    // assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    // pra poder saber que agora eu vou mostrar a segunda imagem
    imagemAtual++;

    // esconder todas as imagens
    // pegar todas as imagens usando o DOM e remover a classe mostrar 
    esconderImagens();
    mostrarImagem();
});

/*
    quando clicar na seta pra voltar temos que 
    esconder todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener('click', function() {
    setaAvancar.classList.remove('apagada');
    
    const totalDeImagens = imagensPainel.length - 1;

    if(imagemAtual === 1) {
        setaVoltar.classList.add('apagada');
    }

    if(imagemAtual === 0) {
        return;
    }

    // a imagem atual começa em 0 pq é a primeira imagem 
    // assim que for clicado no voltar eu preciso subtrair 1 do contador de imagens
    // pra poder saber que agora eu vou mostrar a imagem anterior
    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});


function mudandoTexto(){
    if (imagemAtual === 0){
            textoPagina1()
        
    } else if (imagemAtual === 1){
            textoPagina2()

    } else if( imagemAtual === 2){
            textoPagina3()

    } else if( imagemAtual === 3){
            textoPagina4()
    }
}
mudandoTexto()

function textoPagina1(){
    document.getElementById('titulo').innerHTML = 'Título imagem 1';
    document.getElementById('saiba+').style.color = ' #C50000';
    document.getElementById('saiba+').style.transition = '0.3s ease-in-out';
}

function textoPagina2(){
    document.getElementById('titulo').innerHTML = 'Título imagem 2';
    document.getElementById('saiba+').style.color = ' #D9DD10';
}

function textoPagina3(){
    document.getElementById('titulo').innerHTML = 'Título imagem 3';
    document.getElementById('saiba+').style.color = ' #A63A17';
}

function textoPagina4(){
    document.getElementById('titulo').innerHTML = 'Título imagem 4';
    document.getElementById('saiba+').style.color = ' #10ACDD';
}
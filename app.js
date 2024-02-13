function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // .value para pegar o VALOR do Input ao invés do Input em si.
    // document.getElementByID para pegar o Input de acordo com o ID no HTML.
    // parseInt() para transformar o dado encontrado num número.

    let numerosSorteados = [];
    // lista vazia que vai receber os números sorteados.
    let numero;
    // variável que vai receber um número sorteado por vez para ser adicionado na lista.
    
    for(let i = 0; i < quantidade; i++) {
        // Para cada número sorteado, o i vai aumentar em 1 até chegar na quantidade de 
        // números desejados e sair do loop. Se a variável quantidade for 3, o i vai começar em 0,
        // depois 1, depois 2 e sair do loop pois ao chegar em 3 o i será IGUAL a variável quantidade,
        // gerando assim 3 números aleatórios: quando i=0, i=1 e i=2.
        numero = gerarNumeroAleatorio(de,ate);
        // Gera o número aleatório e atribui a variável número.
        while(numerosSorteados.includes(numero)){
            // Enquanto o número gerado aleatoriamente estiver incluso na lista de números sorteados...
            gerarNumeroAleatorio(de,ate);
            // ...será gerado outro número aleatório, evitando assim, repetições.
        }
        numerosSorteados.push(numero);
        // Coloca o número aleatório, atribuído na variável número, na lista criada para guardar os
        // números sorteados.
    }
    
    let resultado = document.getElementById('resultado');
    // Atribui a variável resultado todo o texto  do HTML que vamos alterar pra exibir os números sorteados.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}.</label>`;
    // Altera o HTML da página para exibir os números sorteados.

    alterarStatusDoBotao();
};

function gerarNumeroAleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    // Math.floor para arredondar. 
    // Número máximo menos número mínimo +1 para pegar a quantidade certa do intervalo de números.
    // + min para não pegar números menores que o valor mínimo.
};

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusDoBotao();
}
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // .value para pegar o VALOR do Input ao invés do Input em si.
    // document.getElementByID para pegar o Input de acordo com o ID no HTML.
    // parseInt() para transformar o dado encontrado num número.

    if (de >= ate) {
        // Impede que o número inicial seja maior que o final.
        alert("O número inicial tem que ser menor que o número final.");
        return;
        // Para a aplicação.
    }

    if (quantidade > (ate - de) + 1) {
        // Impede que escolha uma quantidade de números maior do que disponível.
        alert("A quantidade de números tem que ser menor que o intervalo escolhido.");
        return;
        // Para a aplicação.
    }
    
    let numerosSorteados = [];
    // Lista vazia que vai receber os números sorteados.
    let numero;
    // Variável que vai receber um número sorteado por vez para ser adicionado na lista.
    
    for(let i = 0; i < quantidade; i++) {
        // Para cada número sorteado, o i vai aumentar em 1 até chegar na quantidade de 
        // números desejados e sair do loop. Se a variável quantidade for 3, o i vai começar em 0,
        // depois 1, depois 2 e sair do loop pois ao chegar em 3 o i será IGUAL a variável quantidade,
        // gerando assim 3 números aleatórios: quando i=0, i=1 e i=2.
        numero = gerarNumeroAleatorio(de,ate);
        // Gera o número aleatório e atribui a variável número.
        while(numerosSorteados.includes(numero)){
            // Enquanto o número gerado aleatoriamente estiver incluso na lista de números sorteados...
            numero = gerarNumeroAleatorio(de,ate);
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

    if (document.getElementById('btn-reiniciar').classList.contains('container__botao-desabilitado')) {
    alterarStatusDoBotao();
    }
    // Corrige o bug do botão que mudava toda vez que era clicado.
};

function gerarNumeroAleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    // Math.floor para arredondar. 
    // Número máximo menos número mínimo +1 para pegar a quantidade certa do intervalo de números.
    // + min para não pegar números menores que o valor mínimo.
};

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    // Pegando o Botão Reiniciar do HTML.
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Se o botão for da classe desabilitada...
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        //...tira a classe desabilitada e coloca a classe habilitada.
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        // Se não, remove a classe habilitada e coloca a classe desabilitada.
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    // Limpa todos os campos.

    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    // Substitui os números sorteados pelo texto original.

    if (document.getElementById('btn-reiniciar').classList.contains('container__botao')) {
        alterarStatusDoBotao();
    }
    // Corrige o bug do botão que mudava toda vez que era clicado.
}
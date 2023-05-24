
/*Basicamente, o código usa loops para gerar um número específico de jogos, com cada jogo consistindo de um número específico de números. Além disso, no segundo método sortear_jogos2(), um mês aleatório é exibido antes de exibir cada jogo.*/

function sortear_jogos(){
    let qtd_jogos = parseInt(document.getElementById("qtd_jogos").value); //obtém a quantidade de jogos a serem gerados a partir do elemento HTML

    // Verificar se o número de jogos é negativo
    if (qtd_jogos < 0) {
        // Exibir uma mensagem de alerta informando que a quantidade de jogos não pode ser negativa

        window.alert("A quantidade de jogos não pode ser negativa.");
        return;
    }

    jogo = []; // array que irá armazenar vários arrays

    mostrar_jogos = document.getElementById('mostrar_jogos');

    mostrar_jogos.innerHTML = ''

    // loop para gerar cada jogo
    for(let cont = 0; cont < qtd_jogos; cont++){

        let numeros = [] // array que armazenará os números sorteados

        // loop para gerar cada número do jogo
        while (numeros.length < 6) {

            let numero = Math.floor(Math.random() * 60) + 1; // sorteia um número entre 1 e 60
            if (!numeros.includes(numero)) {
                numeros.push(numero); // adiciona o número se ainda não existir no array
            }
        }

        mostrar_jogos.innerHTML += `<p>Jogo ${cont + 1}: ${numeros}</p>` // exibe o array de arrays com o array de números sorteados
    }
}

function sortear_jogos2(){
    let qtd_jogos = parseInt(document.getElementById("qtd_jogos").value); //obtém a quantidade de jogos a serem gerados a partir do elemento HTML

    // Verificar se o número de jogos é negativo
    if (qtd_jogos < 0) {
        // Exibir uma mensagem de alerta informando que a quantidade de jogos não pode ser negativa

        window.alert("A quantidade de jogos não pode ser negativa.");
        return;
    }


    jogo = []; // array que irá armazenar vários arrays

    mostrar_jogos = document.getElementById('mostrar_jogos');

    const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]; // array de meses

    mostrar_jogos.innerHTML = ''

    // loop para gerar cada jogo
    for(let cont = 0; cont < qtd_jogos; cont++){

        let numeros = [] // array que armazenará os números sorteados

        // loop para gerar cada número do jogo
        while (numeros.length < 7) {

            let numero = Math.floor(Math.random() * 31) + 1; // sorteia um número entre 1 e 31
            if (!numeros.includes(numero)) {
                numeros.push(numero); // adiciona o número se ainda não existir no array
            }
        }

        mostrar_jogos.innerHTML += `<p>Mês sorteado: ${mesesDoAno[Math.floor(Math.random()* mesesDoAno.length)]}</p>` // exibe um mês aleatório

        mostrar_jogos.innerHTML += `<p>Jogo ${cont + 1}: ${numeros}</p>` // exibe o array de arrays com o array de números sorteados
    }
}

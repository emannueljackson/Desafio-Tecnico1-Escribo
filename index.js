function somatorioDivisiveis35(numero) {
    // Inicializando a variável de somatório
    let somatorio = 0;

    // Iterando de 0 até o número (exclusive)
    for (let i = 1; i < numero; i++) {
        // Verificando se o número é divisível por 3 ou 5
        if (i % 3 === 0 || i % 5 === 0) {
            // Adicionando ao somatório
            somatorio += i;
        }
    }

    // Retornando o resultado
    return somatorio;
}

const numeroLimite = parseInt(prompt("Digite um número inteiro:"));

// Chama a função e exibe o resultado
const resultadoSoma = somatorioDivisiveis35(numeroLimite);
console.log('A soma dos números divisíveis por 3 e 5 até ' + numeroLimite + '  é:' + resultadoSoma);

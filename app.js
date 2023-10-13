alert('Boas vindas ao jogo do número secreto');

let multiplicador = 10;
let numeroSecreto = parseInt(Math.random() *multiplicador + 1);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${multiplicador}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++;

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);





/* Minha resolução.
if (chute == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto}`);
} while (chute > numeroSecreto || chute < numeroSecreto) {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        chute = prompt('Escolha um número entre 1 e 10');
    } else {
        alert(`O número secreto é maior que ${chute}`);
        chute = prompt('Escolha um número entre 1 e 10');
    }
}
*/


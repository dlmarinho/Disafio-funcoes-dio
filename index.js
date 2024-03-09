let resultado = nivelReanked (25, 5)
console.log(resultado)

function nivelReanked (vitorias, derrotas) {
    let saldo = saldoVitorias(vitorias, derrotas)
    let nivel
    if (saldo <= 10 ) {
        nivel = "Ferro"
    }else if ((saldo >= 11) && (saldo <= 20)) {
        nivel = "bronze"
    }else if ((saldo >= 21) && (saldo <= 50)) {
        nivel = "Prata"
    }else if ((saldo >= 51) && (saldo <= 80)) {
        nivel = "Ouro"
    }else if ((saldo >= 81) && (saldo <= 90)) {
        nivel = "Diamante"
    }else if ((saldo >= 91) && (saldo <= 100)) {
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }

    return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`
}


function saldoVitorias (vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
 }


let valorcompra = 99

if (valorcompra >= 100) {
    console.log("Compra R$: " + valorcompra + " Desconto: 10%" + " Valor final: " + (valorcompra - (10 * valorcompra)/100))
} else if (valorcompra > 200) {
    console.log("Compra R$: " + valorcompra + " Desconto: 20%" + " Valor final: " + (valorcompra - (10 * valorcompra)/100))
} else {
    console.log("Compra R$: " + valorcompra + " Desconto: Sem desconto.")
}
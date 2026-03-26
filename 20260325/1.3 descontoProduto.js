let valorProduto = 5.50;
let percentualDesconto = 20;

let subtotal = valorProduto - (valorProduto * percentualDesconto / 100);

console.log("Valor a pagar R$ " + subtotal.toFixed(2));

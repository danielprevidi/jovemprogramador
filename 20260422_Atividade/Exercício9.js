let idade = 16;
let acompanhado = "nao";

if (idade >= 18) {
    console.log("Liberado!")
} else if (idade >= 16 && acompanhado == "sim") {
    console.log("Liberado!")
} else if (idade >= 16 && acompanhado == "nao") {
    console.log("Somente acompanhado!")
} else {
    console.log ("Entrada Proibida.")
}
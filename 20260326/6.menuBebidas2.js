// Menu principal
let menu = "2";

if (menu === "1") {
    let quentes = 2

    switch (quentes) {
        case "1":
            console.log("Você escolheu Café");
            break;
        case "2":
            console.log("Você escolheu Chá");
            break;
        case "3":
            console.log("Você escolheu Chocolate quente");
            break;
        default:
            console.log("Opção inválida");
            break;
    }

} else if (menu === "2") {
    let geladas = "2"

    switch (geladas) {
        case "1":
            console.log("Você escolheu Suco");
            break;
        case "2":
            console.log("Você escolheu Refrigerante");
            break;
        case "3":
            console.log("Você escolheu Água");
            break;
        default:
            console.log("Opção inválida");
            break;
    }

} else {
    console.log("Opção de menu inválida");
}
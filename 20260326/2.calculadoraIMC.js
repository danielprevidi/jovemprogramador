let peso = 75;
let altura = 1.75;

let calculoIMC = peso / (altura * altura);

if (calculoIMC <18.5) {
     console.log("Você está no estado de magreza!");}
    else if (calculoIMC <24.5) {
     console.log("Você está com o peso ideal!");}
        else if (calculoIMC <29.9) {
     console.log("Você está com sobrepeso!");}
         else {
     console.log("Você está em estado de obesidade!");}



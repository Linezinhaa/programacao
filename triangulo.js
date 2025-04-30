let lado1 = parseInt(prompt("Digite o lado 1:"))
let lado2 = parseInt(prompt("Digite o lado 2:"))
let lado3 = parseInt(prompt("Digite o lado 3:"))

switch(true){
    case (lado1 ===  lado2 && lado2 === lado3):
    console.log("Triângulo Equilátero");
break;
    case (lado1 === lado2 || lado2 === lado3 || lado1 === lado3):
    console.log("Triângulo Isóceles")
break;

default:
    console.log("Triângulo Escaleno")
     
}


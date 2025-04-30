let mes= parseInt(prompt("Digite número do mês:"))

switch (mes){
    case 12:
    case 1:
    case 2:
        console.log("Mês de Verão!!")
    break;
    case 3:
    case 4:
    case 5:
        console.log("Mês de Outono!!")
    break;
    case 6:
    case 7:
    case 8:
        console.log("Mês de Inverno!!")
    break;
    case 9:
    case 10:
    case 11:
        console.log("Mês de Primavera!!")
    default:
        console.log("Digite de 1 a 12!!");

}
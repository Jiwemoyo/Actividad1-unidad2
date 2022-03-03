alert("Numeros Romanos")
let num = prompt("ingrese numeros enteros hasta el 10 par mostrar su equivalente en romanos")
num=parseInt(num)

if (num <=0 || num > 10) {
    alert("Solo numeros ente 1 y 10")
} else {
    switch (num) {
        case 1:
           document.write(`el numero 1 en romanos es I`)
            break;
        case 2:
            document.write(`el numero 2 en romanos es II`)
            break;
        case 3:
            document.write(`el numero 3 en romanos es III`)
            break;
        case 4:
            document.write(`el numero 4 en romanos es IV`)
            break;
        case 5:
            document.write(`el numero 5 en romanos es V`)
             break;
        case 6:
            document.write(`el numero 6 en romanos es VI`)
             break;
        case 7:
            document.write(`el numero 7 en romanos es VII`)
             break;
        case 8:
            document.write(`el numero 8 en romanos es VIII`)
             break;
        case 9:
            document.write(`el numero 9 en romanos es IX`)
             break;        
        default:
            document.write(`el numero 10 en romanos es X`)
            break;
    }
}
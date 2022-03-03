alert("tienda de calzado")
var v = parseFloat(prompt("VALOR DEL CALZADO -----------"));
var category = prompt("CATEGORIA--------");
var bo;

switch (category) {
    case "A":
        var bo = v-(v*(0.10)); 
        // document.write("SALARIO TOTAL"+ salary*(1.10));
        
        break;
    case "B" :
         var bo = v-(v*(0.15)); 
        // document.write("SALARIO TOTAL"+ salary*(1.20));
        break;
    case "C":
        var bo = v-(v*(0.20));
        // document.write("SALARIO TOTAL"+ salary*(1.30));
        break;
    default:
        break;
}

document.write("VALOR TOTAL $"+ bo.toFixed(2));
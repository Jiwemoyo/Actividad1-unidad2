alert("MAyor de edad menor de edad")
var menoredad=0
var mayoredad=0
for (let index = 1; index < 21; index++) {

    edades=prompt(`Ingrese la edad de la persona ${index}`)
    if (edades <=17) {
        var menoredad = menoredad+1
    }else{
        var mayoredad = mayoredad+1
    }
    
}
document.write(`Las personas menores de edad son ${menoredad} y las mayores de edad son ${mayoredad}`)


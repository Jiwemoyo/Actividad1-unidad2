alert (" Promedio de Notas")

//Primer Forma

/*var N = parseInt(prompt("CUANTAS NOTAS TIENE----"));
var promedio=0;
var Acumula=1;
var cuenta;
var notas;
var suma_notas=0;

if (N!==0) {
    while(Acumula<=N){
        notas=parseInt(prompt("DAME LA NOTA"+ Acumula));
        suma_notas=suma_notas+notas
        Acumula=Acumula+1  
    }
    
}else{
    document.write("NO NOTAS MENORES O IGUALES A 0");

}

promedio=suma_notas/N;
document.write("PROMEDIO "+ promedio);*/

//Segunda Forma

var N = 1;
var suma=0;
var cantidad=0;
var notas=0;
var promedio=0;

while (N!=0) {
	notas=parseFloat(prompt(`Ingrese una nota u oprima cero para dejar de ingresar notas`))
	
	suma = suma +notas
	cantidad = cantidad+1
	N = notas
}

promedio=(suma)/(cantidad-1)

document.write(`usted ingreso un total de ${cantidad-1} notas <br>
que sumadas dan ${suma} <br>
y el promedio de las mismas es ${promedio}`)
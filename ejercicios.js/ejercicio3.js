alert (" Promedio de Notas")
var N = parseInt(prompt("CUANTAS NOTAS TIENE----"));
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
document.write("PROMEDIO "+ promedio);

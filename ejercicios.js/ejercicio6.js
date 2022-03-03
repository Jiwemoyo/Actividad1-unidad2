alert("almacen de ofertas")
let precioUnitario =prompt("Ingrese el precio unitario")
let articulo =prompt("Cuantos articulos planea comprar")
precioUnitario=parseFloat(precioUnitario)
articulo=parseFloat(articulo)

let precioTotal = precioUnitario*articulo

if (articulo >=0  && articulo <=100 ) {
    
    document.write(`El precio de su compra es de: ${precioTotal} <br>`)
    precioTotal=precioTotal-(precioTotal*0.02)
    document.write(`Pero con el descuento del 2% sera de: ${precioTotal}`)

}else if(articulo >=101  && articulo <=250){

    document.write(`El precio de su compra es de: ${precioTotal} <br>`)
    precioTotal=precioTotal-(precioTotal*0.05)
    document.write(`Pero con el descuento del 5% sera de: ${precioTotal}`)

}else if(articulo >=251  && articulo <=800){
    document.write(`El precio de su compra es de: ${precioTotal} <br>`)
    precioTotal=precioTotal-(precioTotal*0.08)
    document.write(`Pero con el descuento del 8% sera de: ${precioTotal}`)
}else if(articulo >= 801) {
    document.write(`El precio de su compra es de: ${precioTotal} <br>`)
    precioTotal=precioTotal-(precioTotal*0.12)
    document.write(`Pero con el descuento del 12% sera de: ${precioTotal}`)
}else{
    document.write("No se admiten valore negativos")
}

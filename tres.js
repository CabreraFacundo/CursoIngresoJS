function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var descuento;
	var precioDescuento;
	var iva;

	precio = prompt("Por favor ingrese el precio del producto: ");
	precio = parseInt(precio);
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento que desea aplicar: ");
	porcentajeDescuento = parseInt(porcentajeDescuento);

	descuento = precio * (porcentajeDescuento / 100);
	precioDescuento = precio - descuento;
	iva = precioDescuento * 0.21;

	alert("Descuento: " + descuento + " Precio con descuento: " + precioDescuento );

	document.getElementById('elPrecioFinal').value = precioDescuento + iva;
}

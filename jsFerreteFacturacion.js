/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;

	numeroUno = document.getElementById('PrecioUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('PrecioDos').value;
	numeroDos = parseInt(numeroDos);
	numeroTres = document.getElementById('PrecioTres').value;
	numeroTres = parseInt(numeroTres);

	suma = numeroUno + numeroDos + numeroTres;

	alert("La suma de los tres productos es: " + suma);

}
function Promedio () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;

	numeroUno = document.getElementById('PrecioUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('PrecioDos').value;
	numeroDos = parseInt(numeroDos);
	numeroTres = document.getElementById('PrecioTres').value;
	numeroTres = parseInt(numeroTres);

	promedio = (numeroUno + numeroDos + numeroTres) / 3;

	alert("El promedio de los tres precios es: " + promedio);

}
function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var precioFinal;
	var precioFinalIva;

	numeroUno = document.getElementById('PrecioUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('PrecioDos').value;
	numeroDos = parseInt(numeroDos);
	numeroTres = document.getElementById('PrecioTres').value;
	numeroTres = parseInt(numeroTres);	

	precioFinal = numeroUno + numeroDos + numeroTres;
	precioFinalIva = precioFinal + (precioFinal * 0.21);

	alert("El precio final (con iva incluido) es: " + precioFinalIva);


}	
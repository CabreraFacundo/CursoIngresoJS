/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var hancho;
	var perimetro;		//se alambra con 3 hilos de alambre.
	var alambre;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);
	hancho = document.getElementById('Ancho').value;
	hancho = parseInt(hancho);

	perimetro = (largo + hancho) * 2;

	alambre = perimetro * 3;	

	alert("Deberas comprar " + alambre + " metros de alambre para alambrar el terreno.");

}


function Circulo () 
{
	var radio;
	var perimetroCirculo;
	var alambre;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	perimetroCirculo = (2 * 3.14 * radio);
	alambre = perimetroCirculo * 3;

	alert("Para alambrar el terreno necesitaras " + alambre + " metros de lambre." )

}


function Materiales () 
{
	var largo;
	var hancho;
	var area;		
	var cemento;
	var cal;
	var cementoFinal;
	var calFinal;

	largo = document.getElementById('Largo').value;
	largo = parseInt(largo);
	hancho = document.getElementById('Ancho').value;
	hancho = parseInt(hancho);
	
	area = largo * hancho;

	cemento = 2;
	cal = 3; 

	cementoFinal = cemento * area;
	calFinal = cal * area;

	alert("Necesitaras " + cementoFinal + " bolsas de cemento y " + calFinal + " bolsas de cal.")

}
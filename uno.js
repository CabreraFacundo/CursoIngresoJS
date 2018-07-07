
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base de un triangulo equilatero: ");
	altura = prompt("Ingrese la altura de un triangulo equilatero");

	base = parseInt(base);
	altura = parseInt(altura);

	perimetro = (base * 3);
	superficie = (base * altura) / 2;
	

	alert( "El perimetro es: " + perimetro + " la superficie es: " + superficie);
}

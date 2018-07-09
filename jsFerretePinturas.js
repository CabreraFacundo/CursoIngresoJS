/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempFahrenheit;
	var tempCentigrados;

	tempFahrenheit = document.getElementById('Temperatura').value;
	tempFahrenheit = parseInt(tempFahrenheit);

	tempCentigrados = tempFahrenheit * 17.22;

	alert( tempFahrenheit + " Fahrenheit son " + tempCentigrados + " centígrados");
}

function CentigradosFahrenheit () 
{
	var tempCentigrados;
	var tempFahrenheit;

	tempCentigrados = document.getElementById('Temperatura').value;
	tempCentigrados = parseInt(tempCentigrados);

	tempFahrenheit = tempCentigrados / 17.22;

	alert( tempCentigrados + " centigrados son " + tempFahrenheit + " Fahrenheit.")
}

/*

maria f 15	
jose m 33
fer f 25
pedir sexo validar
pedir nombre validar
pedir edad validar

*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var cantidadM;
	var cantidadV;
	var cantidadMenores;
	var cantidadMayores;
	var mujeresMay;
	var mujeresMen;
	var varonesMay;
	var varonesMen;
	var promedioTotal;
	var promedioVarones;
	var promedioMujeres;
	var edadVarones;
	var edadMujeres;
	var edadMayor;
	var edadMenor;
	var nombreMujMayor;
	var nombreMayor;
	var nombreMenor;

	cantidadM = 0;
	cantidadV = 0;
	contador = 0;
	cantidadMayores = 0;
	cantidadMenores = 0; 
	mujeresMen = 0;
	mujeresMay = 0;
	varonesMen = 0;
	varonesMay = 0;
	promedioTotal= 0;
	edadMujeres = 0;
	edadVarones = 0;
	edadMayor = 0;
	edadMenor = 1000;


	while(contador <3)
	{
		contador++;
		nombre = prompt("Ingrese su nombre: ");
		sexo = prompt("Ingrese su sexo: ");

		while(!(sexo == "f" || sexo == "m"))
		{
			sexo = prompt("error, Ingrese su sexo (f o m): ");
		} 

		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);

		while(isNaN(edad) || edad > 100 || edad < 0)
		{
			edad = prompt("error, Ingrese una edad valida: ");
		}
		

		switch(sexo)
		{
			case "f":
				cantidadM++;
				edadMujeres += edad;
					if(edad<18)
					{
						mujeresMen++;
					}
					else
					{
						mujeresMay++;
					}
				break;
			case "m":
				cantidadV++;
				edadVarones += edad;
					if(edad<18)
					{
						varonesMen++;
					}
					else
					{
						varonesMay++;
					}
				break;
		}

		if(edad < 18)
		{
			cantidadMenores++;
		}
		if(edad > 17)
		{
			cantidadMayores++;
		}

		promedioTotal = promedioTotal + edad;

		if(edad > edadMayor)
		{
			edadMayor += edad;

			if(sexo == "f")
			{
				edadMayor += edad;
				nombreMujMayor = nombre;
			}
			else
			{
				nombreMayor = nombre;
			}

		}
		
		if(edad < edadMenor)
		{
			edadMenor = edad;
			nombreMenor = nombre;
		}


	}

	promedioTotal = promedioTotal / contador;
	promedioVarones = edadVarones / cantidadV;
	promedioMujeres = edadMujeres / cantidadM;

	document.write("La cantidad de Mujeres es: " + cantidadM + "<br>" + "La cantidad de Varones es: " + cantidadV + "<br>");
	document.write("La cantidad de menores es: " + cantidadMenores + "<br>" + "La cantidad de mayores es: " + cantidadMayores + "<br>");
	document.write("Cantidad de mujeres mayores: " + mujeresMay +"<br>"+ "Cantidad de mujeres menores: "+mujeresMen+"<br>");
	document.write("Cantidad de varones mayores: " +varonesMay+"<br>"+ "Cantidad de varones menores: "+varonesMen+"<br>");
	document.write("El promedio total es: "+ promedioTotal+ "<br>");
	document.write("El promedio de la edad de varones es: "+promedioVarones+"<br>");
	document.write("El promedio de la edad de mujeres es: "+promedioMujeres+"<br>");
	document.write("Nombre mayor: "+nombreMayor+"<br>");
	document.write("Nombre menor: "+nombreMenor+"<br>");	
	document.write("Nombre de la mujer mayor: "+nombreMujMayor+"<br>");
}

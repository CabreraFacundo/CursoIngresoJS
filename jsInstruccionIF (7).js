function mostrar()
{
//tomo la edad  
	var estCivil;
	var edad;

	estCivil = document.getElementById('estadoCivil').value;
	edad = document.getElementById('edad').value;

	if(edad < 18 && estCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
		
		if(!(edad < 18 && estCivil != "Soltero")){

		}
	}

}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  

	var edad; 

	edad = document.getElementById('edad').value;

	if(edad < 13){
		alert("Sos un niño")
	}

	else{
			if(edad < 18){
				alert("Sos adolescente.")
			}
			else{
				alert("Sos adulto.")
			}
		}

}//FIN DE LA FUNCIÓN
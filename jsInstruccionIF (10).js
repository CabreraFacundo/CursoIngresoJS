function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = ((Math.random() * 10) + 1);
	nota = parseInt(nota);

	alert(nota);
	
	if(nota > 3){
		if(nota > 3 && nota < 9){
			alert("Aprobado");
		}

		if(nota > 8){
			alert("EXCELENTE");
		}	

	}
	
	else{
		alert("Vamos, la proxima se puede.");
	}


}//FIN DE LA FUNCIÓN
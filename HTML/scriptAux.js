import "scriptTiempo.js"

"use strict";
class Aux{
	buscarTiempo(){
		selectElement = document.querySelector('#selec'); 
        output = selectElement.value;
		var meteo = new meteo(output);
		meteo.verJSON();
	}
}

var aux = new Aux();

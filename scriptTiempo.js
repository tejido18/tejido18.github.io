class Meteo {
    constructor(city) {
        this.apikey = "b2fac2ee044fe233ae6133fe13b0ba57";
        this.ciudad = city;
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "¡Todo correcto! JSON recibido de <a href='https://openweathermap.org'>OpenWeatherMap</a>"
    }
	
    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                $("pre").text(JSON.stringify(datos, null, 2));
				
				if (typeof(localStorage) !== 'undefined') {
					conLocal(datos);
				} else {
					sinLocal(datos);
				}
				
            },
            error: function () {
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).append(elemento);
    }
    verJSON() {
        this.crearElemento("h3", this.correcto, "main"); // Crea un elemento con DOM      
        this.crearElemento("pre", "", "main"); // Crea un elemento con DOM para el string con JSON
        this.crearElemento("h4", "Datos", "main"); // Crea un elemento con DOM 
        this.crearElemento("p", "", "main"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos();
        $("#buttonTiempo").attr("disabled", true);
    }
}

function conLocal(datos){
		localStorage.setItem('name',datos.name);
					localStorage.setItem('country',datos.sys.country);
					localStorage.setItem('lat',datos.coord.lat);
					localStorage.setItem('lon',datos.coord.lon);
					localStorage.setItem('temp',datos.main.temp);
					localStorage.setItem('max',datos.main.temp_max);
					localStorage.setItem('min',datos.main.temp_min);
					localStorage.setItem('pressure',datos.main.pressure);
					localStorage.setItem('humidity',datos.main.humidity);
					localStorage.setItem('amanecer',new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
					localStorage.setItem('anochecer',new Date(datos.sys.sunset * 1000).toLocaleTimeString());
					localStorage.setItem('dirViento',datos.wind.deg);
					localStorage.setItem('velViento',datos.wind.speed);
					localStorage.setItem('hora',new Date(datos.dt * 1000).toLocaleTimeString());
					localStorage.setItem('fecha',new Date(datos.dt * 1000).toLocaleDateString());
					localStorage.setItem('description',datos.weather[0].description);
					localStorage.setItem('visibility',datos.visibility);
					localStorage.setItem('clouds',datos.clouds.all);
					localStorage.setItem('icon',datos.weather[0].icon);
					
					this.meterDatos(localStorage);
	}
	
	function meterDatos(localStorage){
		var stringDatos = "<ul><li>Ciudad: " + localStorage.getItem('name') + "</li>";
					stringDatos += "<li>País: " + localStorage.getItem('country') + "</li>";
					stringDatos += "<li>Latitud: " + localStorage.getItem('lat') + " grados</li>";
					stringDatos += "<li>Longitud: " + localStorage.getItem('lon') + " grados</li>";
					stringDatos += "<li>Temperatura: " + localStorage.getItem('temp') + " grados Celsius</li>";
					stringDatos += "<li>Temperatura máxima: " + localStorage.getItem('max') + " grados Celsius</li>";
					stringDatos += "<li>Temperatura mínima: " + localStorage.getItem('min') + " grados Celsius</li>";
					stringDatos += "<li>Presión: " + localStorage.getItem('pressure') + " milibares</li>";
					stringDatos += "<li>Humedad: " + localStorage.getItem('humidity') + " %</li>";
					stringDatos += "<li>Amanece a las: " + localStorage.getItem('amanecer') + "</li>";
					stringDatos += "<li>Oscurece a las: " + localStorage.getItem('anochecer') + "</li>";
					stringDatos += "<li>Dirección del viento: " + localStorage.getItem('dirViento') + " grados</li>";
					stringDatos += "<li>Velocidad del viento: " + localStorage.getItem('velViento') + " metros/segundo</li>";
					stringDatos += "<li>Hora de la medida: " + localStorage.getItem('hora') + "</li>";
					stringDatos += "<li>Fecha de la medida: " + localStorage.getItem('fecha') + "</li>";
					stringDatos += "<li>Descripción: " + localStorage.getItem('description') + "</li>";
					stringDatos += "<li>Visibilidad: " + localStorage.getItem('visibility') + " metros</li>";
					stringDatos += "<li>Nubosidad: " + localStorage.getItem('clouds') + " %</li></ul>";
					var icon = localStorage.getItem('icon');
					var urlIcon = "https://openweathermap.org/img/w/" + icon + ".png";
					stringDatos += '<img src="' + urlIcon + '"/>';

					$("main").append('<p>' + stringDatos + '</p>');
	}
	
	function sinLocal(datos){
			var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
					stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
					stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
					stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
					stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
					stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
					stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
					stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
					stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
					stringDatos += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
					stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
					stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
					stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
					var icon = datos.weather[0].icon;
					var urlIcon = "https://openweathermap.org/img/w/" + icon + ".png";
					stringDatos += '<img src="' + urlIcon + '"/>';
					
					$("main").append('<p>' + stringDatos + '</p>');
	}
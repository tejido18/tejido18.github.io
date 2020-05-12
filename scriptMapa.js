"use strict";

class Meteo {
    constructor(city) {
        this.apikey = "b2fac2ee044fe233ae6133fe13b0ba57";
        this.ciudad = city;
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
        this.mapaDinamicoGoogle = new Object();
        this.cargarDatos();
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                var centro = {
                    lat: 43.3672702,
                    lng: -5.8502461
                };

                var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 8,
                    center: centro,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infoWindow = new google.maps.InfoWindow;
				
				var marker1 = new google.maps.Marker({
							position: {lat: 43.542194, lng: -5.676875},
							map: mapaGeoposicionado,
							title: 'Asociación JuanaMary'
						});
				var marker2 = new google.maps.Marker({
							position: {lat: 43.371350, lng: -8.396000},
							map: mapaGeoposicionado,
							title: 'Asociacion PeñaGuay'
						});
				var marker3 = new google.maps.Marker({
							position: {lat: 43.2627106, lng: -2.9252801},
							map: mapaGeoposicionado,
							title: 'Asociacion Santa Maria'
						});
				var marker4 = new google.maps.Marker({
							position: {lat: 41.3887901, lng: 2.1589899},
							map: mapaGeoposicionado,
							title: 'Asociacion BuenRollo'
						});
				var marker5 = new google.maps.Marker({
							position: {lat: 40.4165000, lng: -3.7025600},
							map: mapaGeoposicionado,
							title: 'Asociacion SantaSalut'
						});
				var marker6 = new google.maps.Marker({
							position: {lat: 37.9870400, lng: -1.1300400},
							map: mapaGeoposicionado,
							title: 'Asociacion TodasSonInventadas'
						});
				
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        infoWindow.setPosition(pos);
                        infoWindow.setContent("Usted está aquí");
                        infoWindow.open(mapaGeoposicionado);
                        mapaGeoposicionado.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
                    });
                } else {
                    handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
                }
            },
            error: function () {
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }

}

var meteo = new Meteo("Oviedo");

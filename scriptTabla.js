$(document).ready(function(){
			$("#botonBD").click(function(){
				$.ajax({
				type: "GET" ,
				url: "cepas.xml" ,
				dataType: "xml" ,
				success: function(xml) {
					  
					  $('#botonBD').attr("disabled", true);
					  
					  var cadena="<table border='1' ><tr>"
					  +"<td align=center> <b>Nombre</b></td>"
					  +"<td align=center><b>Sabor</b></td>"
					  +"<td align=center><b>Aroma</b></td>"
					  +"<td align=center><b>Efectos Negativos</b></td>"
					  +"<td align=center><b>Efectos Positivos</b></td>"
					  +"<td align=center><b>Calificacion</b></td>"
					  +"</tr>";
					  
					  $(xml).find("cepa").each(
					  function(i,e){
							
							var lista1 ="<ul>";
							$(e).find("efectos").each(
										function(i,e){
										$(e).find("positivos").each(
											function(i,e){
												$(e).find("efecto").each(
												function(i,e){
													lista1 += "<li>" + $(e).text() + "</li>"
										})
									})
							}) + "</ul>"
							
							var lista2 ="<ul>";
							$(e).find("efectos").each(
										function(i,e){
										$(e).find("negativos").each(
											function(i,e){
											$(e).find("efecto").each(
												function(i,e){
													lista2 += "<li>" + $(e).text() + "</li>"
										})
									})
							}) + "</ul>"
					  
					  
							cadena+= "<tr>"
							cadena+="<td align=center>" + $(e).attr("nombre") + "</td>"
							cadena+="<td align=center>" + $(e).find("sabor").text() + "</td>"
							cadena+="<td align=center>" + $(e).find("aroma").text() + "</td>"
							cadena+="<td align=centre>" + lista1 + "</td>"
							cadena+="<td align=centre>" + lista2 + "</td>"
							cadena+="<td align=center>" + $(e).find("calificacion").text() + "</td>"
							cadena+="</tr>"
					  })
					  cadena+="</table>";
					  
					  div1 = $(cadena);
					  $("#poner").prepend(div1);
					 }})
				}
			)})
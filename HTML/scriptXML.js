$(document).ready(function(){
			$('#botonXML').click(function(){
				$.ajax({
				type: "GET" ,
				url: "cepas.xml" ,
				dataType: "xml" ,
				success: function(xml) {
					  $('#botonXML').attr("disabled", true);
					  $("#ponerXML").text((new XMLSerializer()).serializeToString(xml));
				}})	  
			})})
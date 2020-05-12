<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <meta name="autor" content="Alvaro Tejido Jardon">
    
    <title>BD</title>    
    
    <link rel="stylesheet" type="text/css" href="estilo.css" />
    
</head>

<body>
    <section>
		<nav>
			<ul>
				<li><a href="index.html">Página principal</a></li>
				<li><a href="mapa.html">Mapa</a></li>
				<li><a href="descargarBD.html">Descargar BD</a></li>
				<li><a href="historia.html">Historia</a></li>
				<li><a href="cultivo.html">Cultivo</a></li>
				<li><a href="cbd.html">Cbd</a></li>
				<li><a href="consultarTiempo.html">Consultar el tiempo</a></li>
			</ul>
		</nav>
		<h1>Aqui esta su codigo XML</h1> 
<?php

/* 
 * Aplicacion para volcar el contenido de una base de datos
 *  en un fichero xml mediante PHP
 */

/* 
 * Creamos el fichero xml con los datos de la base de datos
 * $cadena es la cadena xml
 */
 Class A{
	function crea_fichero($cadena){
		$flujo = fopen('cepasDescargadas.xml', 'w');//creamos el fichero.
		fputs($flujo, $cadena);//volcamos el contenido de cadena al fichero
		fclose($flujo);//cerramos el flujo
	}
	/* 
	 * Creamos la conexion con la base de datos mediante PDO
	 */
	function generar(){
			$opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
			$dsn = "mysql:host=localhost;dbname=cepas";//datos conexion bbdd
			$usuario = 'root';
			$contrasena = '';

			$dwes = new PDO($dsn, $usuario, $contrasena, $opc);//conexion

			/* 
			 * Preparamos la consulta para obtener las tablas.
			 */
			$sql="SHOW TABLES";

			if (isset($dwes)){
				$resultado = $dwes->query($sql);//obtenemos las tablas de la base de datos
				$xml="<?xml version=\"1.0\"?>\n";//variable que contendra el codigo xml
				$xml .= "<cepas>\n";

				while($row = $resultado->fetch()){

					$sql2="SELECT * FROM ".$row[0];//consulta las tablas dinamicamente
					echo $sql2;
					echo '<br/>';
					$xml .= "\t<".$row[0].">\n";//tabla de la base de datos
					$result= $dwes->query($sql2);//obtenemos todos los campos de la  tabla

					while($fila = $result->fetch(PDO::FETCH_ASSOC)){

						$xml .= "\t\t<cepa>\n";//por cada registro de la tabla

						foreach ($fila as $k => $v) {//recorremos las claves y los valores de cada registro
							echo "$k => $v.\n";
							echo "<br/>";

							$xml .= "\t\t\t<".$k.">".$v."</".$k.">\n";//los almacenamos en el xml
						}
						$xml .= "\t\t</cepa>\n";//cerramos el registro
					}
					$xml .= "\t</".$row[0].">\n";//cerramos la tabla
				}
				$xml .="</cepas>";//cerramos el fichero xml
				//echo $xml;

				crea_fichero($xml);
			}
	}
 }
 A->generar();

?>
	</section>
        
    <footer>
      <a href="https://validator.w3.org/check?uri=referer"><img
          src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
          alt="HTML5 Válido" title="HTML5 Válido" height="64" width="63" /></a>
        
        
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>

        
    </footer>
    
</body>
</html>
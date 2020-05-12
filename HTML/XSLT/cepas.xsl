<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 
	<xsl:output method="html" version="5.0" encoding="utf-8" indent="yes"/>

	<xsl:template match="cepas">
		<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
		<html lang="es">
			<head>
				<title>Ejemplos de cepas</title>
				<link rel="stylesheet" type="text/css" href="estilo.css"/>
			</head>
			<body>
				<header>
					<h1>Ejemplos de cepas</h1>
					<h2>Cepas</h2>
					<nav>
						<a href="./../descargarBD.html">VOLVER A LA PÁGINA</a>
					</nav>
				</header>
				<main>
					<xsl:for-each select="cepa">
						<section class="cepa">
							<h3>
								<xsl:value-of select="@nombre"/>
							</h3>
							<p>
								<span class="section">Sabor: </span>
								<xsl:value-of select="sabor"/>
							</p>
                            <p>
								<span class="section">Aroma: </span>
								<xsl:value-of select="aroma"/>
							</p>
							<!-- <nav class="efectos-section"> -->
								<!-- <span class="section">Efectos: </span> -->
							<!-- </nav> -->
							<p> Efectos Positivos:</p>
							<ul class="positivos">
								<xsl:for-each select="efectos//positivos">				
									<xsl:for-each select="efecto">	
										<li>
											<a class="efecto">
												<xsl:value-of select="."/>
											</a>
										</li>
									</xsl:for-each>
								</xsl:for-each>
							</ul>  
							<p> Efectos Negativos:</p>
							<ul class="negativos">
								<xsl:for-each select="efectos//negativos">
									<xsl:for-each select="efecto">	
										<li>
											<a class="efecto">
												<xsl:value-of select="."/>
											</a>
										</li>
									</xsl:for-each>
								</xsl:for-each>
							</ul> 
                            <p class="potencia-section">
								<span class="section">Potencia: </span>
							</p>
							<ul class="potencia">
								<xsl:for-each select="potencia//tipo">
									<p>
                                        <span class="section">Tipo: </span>
										<xsl:value-of select="."/>
                                    </p>
								</xsl:for-each>
								<xsl:for-each select="potencia//porcentaje">
									<p>
                                        <span class="section">Porcentaje: </span>
										<xsl:value-of select="."/>
                                    </p>
								</xsl:for-each>
							</ul>
							<p class="result">
								<span class="calificacion">Calificación: </span>
								<xsl:value-of select="calificacion"/>
							</p>
                            </section>
					   </xsl:for-each>							
					<footer>
						<div class="validations">
							<a href="https://validator.w3.org/check?uri=referer">
								<img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=" HTML5 Válido!" height=" 64" width="63" />
							</a>
							<a href=" http://jigsaw.w3.org/css-validator/check/referer ">
								<img src=" http://jigsaw.w3.org/css-validator/images/vcss" alt="¡CSS Válido!" height="31" width="88" />
							</a>
							<a href="http://www.w3.org/WAI/WCAG2AAA-Conformance">
								<img src="http://www.w3.org/WAI/wcag2AAA" alt="Level Triple-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0"/>
							</a>
						</div>
					</footer>
				</main>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
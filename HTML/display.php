<?php
include("connection.php");
$con=mysqli_connect("localhost","root","");
mysqli_select_db("cepas",$con);
$result=mysqli_query("select nombre,sabor,aroma,calificacion from cepa",$con);

echo "<table border='1' >
<tr>
<td align=center> <b>Nombre</b></td>
<td align=center><b>Sabor</b></td>
<td align=center><b>Aroma</b></td>
<td align=center><b>Calificacion</b></td></tr>";

while($data = mysqli_fetch_row($result))
{   
	
	echo "<tr>
    <td align=center>$data[0]</td>
	<td align=center>$data[1]</td>
    <td align=center>$data[2]</td>
    <td align=center>$data[3]</td></tr>";
}
echo "</table>";
?>
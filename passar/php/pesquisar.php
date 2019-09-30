<? php

$url='localhost';
$usuario='root';
$senha='';
$bd='Passsar-bem';
$con=mysqli_connect($url, $usuario, $senha, $bd);
$buscar= $_POST['buscar'];
$sql=mysqli_query($con, "select * from Usuario where login='$buscar'");
echo"<table>";
while  ($row =mysqli_fetch_array($sql)){
	echo "<tr>";
	echo "<td>".$row['idUsuario']."</td>";
	echo "<td>".$row['login']."</td>";
	echo "<td>".$row['senha']."</td>";
	echo "<tr>";
}	
echo "</table>";

?>
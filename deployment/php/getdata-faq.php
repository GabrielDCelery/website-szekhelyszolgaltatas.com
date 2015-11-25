<?php

require('../settings.php');

$pdo = new PDO(
    'mysql:host=' . $database_hostname . ';dbname=' . $database_name,
    $database_username,
    $database_password,
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$searchparameter = $_POST["querystring"];

$querystring = 'SELECT question, answer FROM ' . $database_table_name . ' WHERE category="' . $searchparameter . '"';
$preparedstatement = $pdo->prepare($querystring);
$preparedstatement->execute();
$results = $preparedstatement->fetchAll(PDO::FETCH_ASSOC);
echo(json_encode($results));

?>
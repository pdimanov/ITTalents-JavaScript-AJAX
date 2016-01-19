<?php 

header('Content-Type: application/json');

$characters = require_once 'database.php';

if($_GET){
	foreach($characters as $key => $value){
		if($value['name'] == $_GET["name"])
		{
			echo json_encode($characters[$key]);
		}
	}
} else {
	$getOnHome = [];
	foreach($characters as $key => $value){
		$personNameAndImage = [ 
		'name' => $value['name'],
		'picture' => $value['picture'],
		];
		array_push($getOnHome, $personNameAndImage);
	}
	echo json_encode($getOnHome);
}
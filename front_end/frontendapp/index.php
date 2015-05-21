<?php 

$homepage = file_get_contents('http://172.17.0.7:3000/message');
echo $homepage;
echo "<h1>Hello World</h1>" ;
// var_dump(json_decode($json));
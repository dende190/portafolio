const express = require('express');
const app = express();

//Configuraciones Generales
app.set('port', process.env.PORT || 3000)

app.get('*', (req, res) => {
	res.write(`<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Mi portaforlio</title>
	<link rel="stylesheet" href="http://localhost:9000/src/global.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<link href="http://localhost:9000/app.css" rel="stylesheet"></head>
<body>
	<div id="app"></div>
	<div id="modal-projects"></div>
<script type="text/javascript" src="http://localhost:9000/js/app.js"></script></body>
</html>`)
	res.end()
})

app.listen(app.get('port'), () => {
    console.log("Servidor Arrancando en el puerto: " + app.get('port'))
})
var exec = require ("child_process").exec;
var querystring = require("querystring");

function iniciar(response, postData)
{
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />' +
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';
        response.writeHead (200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    
}

function subir(response, postData)
{
    console.log ("Manipulador de peticion 'subir' ha sido llamado");
    response.writeHead (200, {"Content-Type": "text/html"});
    response.write("Has enviado: " + 
    querystring.parse(postData)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
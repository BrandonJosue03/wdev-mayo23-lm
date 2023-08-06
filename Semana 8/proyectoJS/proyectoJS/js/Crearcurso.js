let formulario = document.getElementById('formulario');
const modalSucess = new boostrap.modal(document.getElementById('modalSuccess'))

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarCurso.php";


formulario.addEventListener('submit', function(e)
{
    e.preventDefault();

    var datosEnviar = { 
        "nombre":document.getElementById("nombre").value,
        "descripcion":document.getElementById("descripcion").value,
        "tiempo":document.getElementById("tiempo").value,
        "usuario":"Brandon B"
    }

    apiurl = apibase + apicrear ;
    fetch(apiurl,
        {
            method:'POST',
            body: JSON.stringify(datosEnviar)
        })
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
        modalSuccess.show()
        completeInsert()
        })
    .catch(console.log);

    
});
function completeInsert(){
    window.location = "listarcurso.html"
}
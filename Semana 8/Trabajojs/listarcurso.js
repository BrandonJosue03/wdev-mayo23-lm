var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaCurso.php";

let tablaresultado = document.querySelector('#tablaresultado');

function consultardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultar ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostabla(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
    //    console.log(objetoindividual.id);
    //    console.log(objetoindividual.nombre);
    //    console.log(objetoindividual.descripcion);
    //    console.log(objetoindividual.tiempo);
    //    console.log(objetoindividual.usuario);
    //    console.log("///////////");

       tablaresultado.innerHTML += `
            <tr class="table-primary" >
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.descripcion}</td>
                                <td>${objetoindividual.tiempo}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>---</td>                              
            </tr>
       `;
    }


    // {"id":"3086","nombre":"Api Jul 19","descripcion":"Expres","descripcion":"85","usuario":"Kevin M. VLA"}
           
}


consultardatos();
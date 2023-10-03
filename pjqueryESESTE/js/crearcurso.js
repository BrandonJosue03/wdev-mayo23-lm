$(document).ready(function () {
  let formulario = $("#formulario");
  const modalSuccess = new bootstrap.Modal($("#modalSuccess"));

  let apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
  let apiCrear = "InsertarCursos.php";

  formulario.on("submit", function (e) {
    e.preventDefault();

    let datosEnviar = {
      nombre: $("#nombre").val(),
      descripcion: $("#descripcion").val(),
      tiempo: $("#tiempo").val(),
      usuario: "Brandon y Jazmin",
    };

    let apiUrl = apiBase + apiCrear;
    $.ajax({
      url: apiUrl,
      type: "POST",
      data: JSON.stringify(datosEnviar),
      dataType: "json",
      success: function (datosRespuesta) {
        modalSuccess.show();
        completeInsert();
      },
      error: function (error) {
        console.log(error);
      },
    });
  });

  function completeInsert() {
    window.location = "listarcurso.html";
  }
});

// let formulario = document.getElementById('formulario');
// const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'))

// let apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
// let apicrear = "InsertarCursos.php";

// formulario.addEventListener('submit', function(e)
// {
//     e.preventDefault();

//     let datosEnviar = {
//         "nombre":document.getElementById('nombre').value ,
//         "descripcion":document.getElementById('descripcion').value ,
//         "tiempo":document.getElementById('tiempo').value ,
//         "usuario":"Brandon y Jazmin"
//     }

//     apiurl = apibase + apicrear ;
//     fetch(apiurl,
//         {
//             method:'POST',
//             body: JSON.stringify(datosEnviar)
//         })
//     .then(estructura => estructura.json())
//     .then((datosrespuesta) => {
//             modalSuccess.show()
//             completeInsert()
//         })
//     .catch(console.log);

//    //
// });

// function completeInsert(){
//     window.location = 'listarcurso.html';
// }

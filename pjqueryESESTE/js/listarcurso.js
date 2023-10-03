let apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
let apiConsultar = "ListaCurso.php";
let apiEliminar = "BorrarCursos.php";
let apiEditar = "ActualizarCursos.php";

const myModalEliminar = new bootstrap.Modal($("#myModalEliminar"));
const myModalEditar = new bootstrap.Modal($("#myModalEditar"));
const modalSuccess = new bootstrap.Modal($("#modalSuccess"));

let tablaResultado = $("#tablaresultado");

function consultardatos() {
  //fetch sirve para extraer, insertar modificar, eliminar consultardatos,
  let apiUrl = apiBase + apiConsultar;

  $.ajax({
    url: apiUrl,
    type: "GET",
    success: function (datosRespuesta) {
      console.log("datosRespuesta:", datosRespuesta);
      ajustardatostabla(datosRespuesta.data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function ajustardatostabla(datos) {
  console.log("datos" + datos);

  for (const objetoindividual of datos) {
    tablaResultado.html(
      tablaResultado.html() +
        `
        <tr>
          <td>${objetoindividual.id}Id</td>
          <td>${objetoindividual.nombre}</td>
          <td>${objetoindividual.descripcion}</td>
          <td>${objetoindividual.tiempo}</td>
          <td>${objetoindividual.usuario}</td>
          <td>
          <a name="Editar" id="Editar" class="btn btn-success" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombre}','${objetoindividual.descripcion}','${objetoindividual.tiempo}')">Editar</a>
          
          <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
          </td>
        </tr>
        `
    );
  }
}

function mostrarModal(id) {
  eliminandodato(id);

  myModalEliminar.show();
}

function eliminandodato(id) {
  let datosEnviar = {
    id: id,
  };

  let apiurl = apiBase + apiEliminar;

  $.ajax({
    type: "POST",
    url: apiurl,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: (datosrespuesta) => {
      refrescar();
    },
    error: function (error) {
      console.error(error);
    },
  });
}

function refrescar() {
  myModalEliminar.hide();
  tablaResultado.html(``);
  consultardatos();
}

function mostrarEditarModal(id, nombre, descripcion, tiempo) {
  $("#id").val(id);
  $("#nombre").val(nombre);
  $("#descripcion").val(descripcion);
  $("#tiempo").val(tiempo);
  myModalEditar.show();
}

$("#formulario").on("submit", function (e) {
  e.preventDefault();
  //alert('salvadndo');

  let datosEnviar = {
    id: $("#id").val(),
    nombre: $("#nombre").val(),
    descripcion: $("#descripcion").val(),
    tiempo: $("#tiempo").val(),
    usuario: "Jaz y Bran",
  };

  let apiurl = apiBase + apiEditar;

  $.ajax({
    type: "POST",
    url: apiurl,
    data: JSON.stringify(datosEnviar),
    dataType: "json",
    success: (datosrespuesta) => {
      alert("Salvado");
      // modalSuccess.show()
      refrescar();
    },
    error: function (error) {
      console.error(error);
    },
  });
});

consultardatos();

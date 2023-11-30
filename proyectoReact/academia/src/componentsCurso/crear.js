import React from 'react';


class CrearCurso extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div class="container">
            <form id="formulario">
              <div class="mb-3">
                <label for="" class="form-label">Nombre</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  aria-describedby="helpId"
                  placeholder="Ingresa el nombre"
                />
                <small id="helpId" class="form-text text-muted">Nombre</small>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Descripcion</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  name="descripcion"
                  id="descripcion"
                  aria-describedby="helpId"
                  placeholder="Descripcion"
                />
                <small id="helpId" class="form-text text-muted">Descripcion</small>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Tiempo</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  name="tiempo"
                  id="tiempo"
                  aria-describedby="helpId"
                  placeholder="Ingresa tiempo"
                />
                <small id="helpId" class="form-text text-muted">Tiempo</small>
              </div>
              <button type="reset" class="btn btn-success">Reset</button>
                 
              <button type="submit" class="btn btn-info">Enviar</button>
            </form>
          </div>
        );
    }
}
 
export default CrearCurso;
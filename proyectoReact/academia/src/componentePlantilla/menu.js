import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <ul className="nav justify-content-center  ">
                <li className="nav-item">
                    <a className="nav-link active" href="#" aria-current="page">Active link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="ListarCurso">Listar Curso</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="CrearCurso"> Crear Curso</a>
                </li>
            </ul>


         );
    }
}
 
export default Menu;
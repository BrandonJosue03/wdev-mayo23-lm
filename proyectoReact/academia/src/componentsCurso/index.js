import React from 'react';

class ListarCurso extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            nombre : "",
            descripcion : "",
            tiempo : "",
            usuario : "",
            url : "https://paginas-web-cr.com/ApiPHP/apis/",
            listar :"ListaCurso.php"
        }
    }

    cargardatos(){
        console.log("cargando");
        var urllista = this.state.url + this.state.listar;

        //
        fetch(urllista)
        .then( respuesta => respuesta.json())//todo va a ser tipo json
        .then((datosrespuesta) => {
            //muestra el resultado del api
            console.log(datosrespuesta.data)
            //pintarpalabra(datosrespuesta.data)
        })
        .catch(console.log);
    }

    componentDidMount(){
        this.cargardatos();
    }

    render() { 
        const  {
            id ,
            nombre ,
            descripcion ,
            tiempo ,
            usuario ,
            url ,
            listar 
        } = this.state;
        return (
            <div>
            <div className="container-fluid">
                <h1>Listar Curso</h1>
                <div className="table-responsive">
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th scope="col">Column 1</th>
                                <th scope="col">Column 2</th>
                                <th scope="col">Column 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td scope="row">R1C1</td>
                                <td>R1C2</td>
                                <td>R1C3</td>
                            </tr>
                            <tr className="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                                <td>Item</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>

            
    );
    }
}

export default ListarCurso;
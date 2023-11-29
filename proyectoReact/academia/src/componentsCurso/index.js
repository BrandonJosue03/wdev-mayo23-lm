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
            listar :"ListaCurso.php",
            datos:[],
            datosCargados:false
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
            this.setState({datos: datosrespuesta.data, datosCargados:true})
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
            listar,
            datos,
            datosCargados
        } = this.state;
        return (
            <div>
            <div className="container-fluid">
                <h1>Listar Curso</h1>
                <div className="table-responsive">
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">nombre</th>
                                <th scope="col">descripcion </th>
                                <th scope="col">tiempo </th>
                                <th scope="col">usuario </th>

                            </tr>
                        </thead>
                        <tbody>
{

    datos.map(
        (datosExtraidos)=>(

            <tr key={datosExtraidos.id} className="table-success">
            <td scope="row">{datosExtraidos.id}</td>
            <td>{datosExtraidos.nombre}</td>
            <td>{datosExtraidos.descripcion}</td>
            <td>{datosExtraidos.tiempo}</td>
            <td>{datosExtraidos.usuario}</td>

            </tr>
        )
    )
        

    
}

                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>

            
    );
    }
}

export default ListarCurso;
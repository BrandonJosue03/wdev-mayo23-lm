import React from 'react';

class ListarCurso extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
            <div className="container">
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
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'


//Seleccion de componentes
import ListarCurso from './componentsCurso/index';
import CrearCurso from './componentsCurso/crear';

import Dashboard from './componentePlantilla/dashboard';
import Menu from './componentePlantilla/menu';

import{ Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
      <div className="container-fluid">
        <Menu></Menu>
        <Router>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/ListarCurso" component={ListarCurso}></Route>
        </Router>
      </div>

  );
}

export default App;
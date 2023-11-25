import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'


//Seleccion de componentes
import ListarCurso from './componentsCurso/index';


function App() {
  return (
      <div className="container">
        <ListarCurso></ListarCurso>
      </div>

  );
}

export default App;

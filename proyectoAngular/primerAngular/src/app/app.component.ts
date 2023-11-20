import { Component, OnInit } from '@angular/core';
import { Cursos } from './models/cursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuestacursos } from './models/respuestacursos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primerAngular';

 // arregloDatos: Cursos [ ] = [
  //  { id : "1", nombre : "html5", descripcion : "111", tiempo : "1", usuarios : "", },
   // { id : "2", nombre : "js", descripcion : "222", tiempo : "12", usuarios : "", },
  //  { id : "3", nombre : "jq", descripcion : "333", tiempo : "20", usuarios : "", },   
  //  { id : "4", nombre : "html5", descripcion : "444", tiempo : "13", usuarios : "", },
 //   { id : "5", nombre : "html5", descripcion : "555", tiempo : "50", usuarios : "", }
//  ]

    arregloDatos: Cursos [ ] = []

  ngOnInit(): void {
    this.obtenerDatos();
  }
  
  constructor(private http: HttpClient) {}

  obtenerDatos() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php';
  
    this.http.get<Respuestacursos>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data;
        console.log(response.data);
      },
      (error) => {
        console.error('Error en la carga de datos', error);
      }
    );
  }
}






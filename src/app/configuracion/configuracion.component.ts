import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista_asistencia = [
    { nombre: "Irving", matricula: "zS20006735", carrera: "Ingeniera de software", status: "Presente"},
    { nombre: "John", matricula: "zS20001234", carrera: "Computer Science", status: "Presente" },
    { nombre: "Jane", matricula: "zS20005678", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Mike", matricula: "zS20009876", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Samantha", matricula: "zS20004567", carrera: "Industrial Engineering", status: "Presente"},

  ]

  mostrar_asistencia = false;

  mostrarListaAsistencia(){
    this.mostrar_asistencia = !this.mostrar_asistencia;
  }

  mostrar_materias = false;

  mostrarMaterias(){
    this.mostrar_materias = !this.mostrar_materias;
  }

}

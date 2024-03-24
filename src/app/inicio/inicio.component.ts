import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista_asistencia = [
    { nombre: "Irving", matricula: "zS20006735", carrera: "Ingeniera de software", status: "Presente"},
    { nombre: "John", matricula: "zS20001234", carrera: "Computer Science", status: "Presente" },
    { nombre: "Jane", matricula: "zS20005678", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Mike", matricula: "zS20009876", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Samantha", matricula: "zS20004567", carrera: "Industrial Engineering", status: "Presente"},
    { nombre: "Megan", matricula: "zS20007890", carrera: "Computer Science", status: "Presente" },
    { nombre: "David", matricula: "zS20003456", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Mia", matricula: "zS20002345", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Ethan", matricula: "zS20005678", carrera: "Industrial Engineering", status: "Presente" },
    { nombre: "Olivia", matricula: "zS20007890", carrera: "Computer Science", status: "Presente" },
    { nombre: "Noah", matricula: "zS20003456", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Ava", matricula: "zS20002345", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "William", matricula: "zS20005678", carrera: "Industrial Engineering", status: "Presente" },
    { nombre: "Sophia", matricula: "zS20007890", carrera: "Computer Science", status: "Presente" },
    { nombre: "James", matricula: "zS20003456", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Charlotte", matricula: "zS20002345", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Benjamin", matricula: "zS20005678", carrera: "Industrial Engineering", status: "Presente" },
    { nombre: "Amelia", matricula: "zS20007890", carrera: "Computer Science", status: "Presente" },
    { nombre: "Lucas", matricula: "zS20003456", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Isabella", matricula: "zS20002345", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Henry", matricula: "zS20005678", carrera: "Industrial Engineering", status: "Presente" },
  ]

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      "title": "Programación Avanzada",
      "teacher": "Dr. Amilcar Meneses",
      "teacherUrl": "",
      "date": "Agosto, 2019",
      "redirect": "",
    }, {
      "title": "Diseño y Análisis de Algoritmos",
      "teacher": "Dra. Dolores Lara",
      "teacherUrl": "",
      "date": "Agosto, 2019",
      "redirect": "",
    }, {
      "title": "Tópicos selectos: Cómputo de alto desempeño I",
      "teacher": "Dres. José Rodríguez y Dr. Amilcar Meneses",
      "teacherUrl": "",
      "date": "Agosto, 2019",
      "redirect": "",
    }, {
      "title": "Realidad Virtual",
      "teacher": "Dr. Luis Gerardo de la Fraga",
      "teacherUrl": "http://delta.cs.cinvestav.mx/~fraga/",
      "date": "Agosto, 2019",
      "redirect": "/cursos/realidad-virtual",
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url: string) {
    if (url != "") {
      this.router.navigate([url]);
    }
  }

}

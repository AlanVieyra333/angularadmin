import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss']
})
export class MachineLearningComponent implements OnInit {
  tasks = [
    {
      "title": "Validación Cruzada",
      "date": "Marzo 10, 2020",
      "redirect": "/cursos/aprendizaje-automatico/validacion-cruzada",
    }, {
      "title": "Máquinas de vectores de soporte",
      "date": "Marzo 3, 2020",
      "redirect": "/cursos/aprendizaje-automatico/svm",
    }, {
      "title": "Descomposición en Componentes Principales",
      "date": "Febrero 25, 2020",
      "redirect": "/cursos/aprendizaje-automatico/pca",
    }, {
      "title": "Regresión Logística",
      "date": "Febrero 4, 2020",
      "redirect": "/cursos/aprendizaje-automatico/regresion-logistica",
    }, {
      "title": "Regresión Polinomial",
      "date": "Enero 28, 2020",
      "redirect": "/cursos/aprendizaje-automatico/regresion-polinomial",
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

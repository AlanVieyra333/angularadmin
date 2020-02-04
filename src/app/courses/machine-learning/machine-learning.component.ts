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
      "title": "Regresión Logística",
      "date": "Febrero 4, 2020",
      "redirect": "/cursos/aprendizaje-automatico/regresion-logistica",
    }, {
      "title": "Regresión Lineal",
      "date": "Enero 28, 2020",
      "redirect": "/cursos/aprendizaje-automatico/regresion-lineal",
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

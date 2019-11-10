import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virtual-reality',
  templateUrl: './virtual-reality.component.html',
  styleUrls: ['./virtual-reality.component.scss']
})
export class VirtualRealityComponent implements OnInit {
  tasks = [
    {
      "title": "Detección de Colisiones - Investigación",
      "date": "Noviembre 11, 2019",
      "redirect": "/cursos/realidad-virtual/deteccion-colisiones-investigacion",
    },
    {
      "title": "Mundo Virtual",
      "date": "Octubre 7, 2019",
      "redirect": "/cursos/realidad-virtual/mundo-virtual",
    }, {
      "title": "Rehilete en 3D",
      "date": "Septiembre 23, 2019",
      "redirect": "/cursos/realidad-virtual/rehilete",
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

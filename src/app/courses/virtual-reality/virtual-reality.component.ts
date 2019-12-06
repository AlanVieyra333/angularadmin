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
      "title": "Fuerza MRA con Control - Simulación de tocar la malla",
      "date": "Diciembre 9, 2019",
      "redirect": "/cursos/realidad-virtual/fuerza-mra-control",
    }, {
      "title": "Fuerza MRA - Malla 3D",
      "date": "Noviembre 26, 2019",
      "redirect": "/cursos/realidad-virtual/fuerza-mra-3d",
    }, {
      "title": "Detección de Colisiones - Investigación",
      "date": "Noviembre 11, 2019",
      "redirect": "/cursos/realidad-virtual/deteccion-colisiones-investigacion",
    }, {
      "title": "Mundo Virtual - Navegación",
      "date": "Octubre 23, 2019",
      "redirect": "/cursos/realidad-virtual/mundo-virtual-navegacion",
    }, {
      "title": "Mundo Virtual - Bosquejo",
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

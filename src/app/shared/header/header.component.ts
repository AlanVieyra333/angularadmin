import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { filter } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private items: MenuItem[];
  home: MenuItem;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this.activatedRoute);
      });
    
    /*this.items = [
      { label: 'Cursos', routerLink: ['/'] },
      { label: 'Realidad Virtual'},
    ];*/

    this.items = this.createBreadcrumbs(this.activatedRoute);

    this.home = {icon: 'pi pi-home', routerLink: ['/'] };
  }

  private createBreadcrumbs(route: ActivatedRoute): MenuItem[] {
    let result = [];
    let child = route;
    let routerLink = '';

    while (child.children[0].children.length > 0) {
      const path = child.children[0].snapshot.routeConfig.path;
      const label = child.children[0].snapshot.routeConfig.data['title'];
      routerLink += '/' + path;
      //console.log(path, label);

      result.push({ label, routerLink: [routerLink] });
      child = child.children[0];
    }

    result[result.length-1].routerLink = null;

    return result;
  }

}

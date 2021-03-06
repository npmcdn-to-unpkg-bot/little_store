import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HttpService }  from './http.service';
import { DetailComponent } from './detail.component';
import { Router } from '@angular/router';
//import './rxjs-extensions';

@Component({
  selector: 'my-app',

  template: `
   <nav>

      <a [routerLink]="['/home']" routerLinkActive="active">Home</a>
      <a [routerLink]="['/shopping_list']" routerLinkActive="active">Shopping list</a>

    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['static/app/app.component.css'],
  directives: [DetailComponent,ROUTER_DIRECTIVES],
  providers: [
   HttpService,
  ]
})

export class AppComponent {


}


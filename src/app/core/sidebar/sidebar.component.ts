import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentRouteTitle = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.firstChild;
        let childRoute = route;
        while (childRoute) {
          if (childRoute.firstChild) {
            childRoute = childRoute.firstChild;
          } else {
            break;
          }
        }
        return childRoute;
      }),
      map(route => route && route.snapshot.data['title'])
    ).subscribe((title: string) => {
      // Set the current route title
      this.currentRouteTitle = title;
    });
  }
}

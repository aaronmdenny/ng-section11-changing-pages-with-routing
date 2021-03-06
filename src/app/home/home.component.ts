import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Inject the router so we can control navigation.
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number): void {
    // complex calculation
    // ...done! Now we want to navigate away.

    /**
     * The navigate() method takes an argument that allows us to navigate to a new route. The route is defined as an
     * array of the single or the different elements of the new path. The first element in the array is the first part
     * of the path. If it begins with the / character, the path is absolute. Relative paths are also possible. Just keep
     * in mind what the path is relative to.
     */
    /**
     * This demonstrates programatic navigation. The user presses the button to navigate to server 1, and this function
     * executes. Query params and the fragment are added as shown.
     */
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: {
        allowEdit: '1'
      },
      fragment: 'loading'
    });
  }
}

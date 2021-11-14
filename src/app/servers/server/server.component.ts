import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        // Be sure to convert the value of 'id' to a number, since params are strings. Use '+' to do this.
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  // We add the ability to navigate to the Edit-Server Component with a button and function. We can simply append 'edit'
  // to the route we are currently on (which is /servers/:id) because that is how it is set up in the routes array. So,
  // this is a relative path, which requires us to pass in the second argument to navigate().

  // Unfortunately, we lose the query parameters. Navigating to /servers/:id/ from /servers passed the query parameter
  // allowEdit, but navigating to /servers/:id/edit from /servers/:id does not pass allowEdit. See how to preserve
  // query params when navigating to a new route on the same outlet in the next commit.

  // To preserve query parameters, we can add a property to the JavaScript object. The queryParamsHandling property can
  // be set to 'merge' to merge any new query params to existing ones, or 'preserve' to just keep existing ones.
  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}

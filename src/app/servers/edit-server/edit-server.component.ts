import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve query parameters and the fragment by using the ActivatedRoute (either by using snapshot or a
    // subscription to params). Using a snapshot will only allow usage of the queryParams and fragment at the time this
    // component is created. Subscribe to the params Observable to react dynamically if this component is reloaded. In
    // this case, since we have query parameters, we would subscribe to the queryParams Observable. Fragments can also
    // be subscribed to. Angular will handle unsubscribing, since we do not create these Observables.
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (params: Params) => {
        console.log(params);
      }
    );
    this.route.fragment.subscribe(
      (fragment: string) => {
        console.log(fragment);
      }
    );
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}

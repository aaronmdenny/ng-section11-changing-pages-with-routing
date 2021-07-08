import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    /**
     * The navigate() method does now know which route you are currently on. This is in contrast to the routerLink
     * directive, which does know. So when you use a relative path with the routerLink directive, the app will append
     * your argument to the current path. Since the navigate() method below does not know your current path, the
     * behavior is different.
     * 
     * To tell navigate() what route we are on, we pass a Javascript object as a second argument. By default, the
     * relative route is the root. To inform the navigate() method what route you are on, inject the ActivatedRoute in
     * the constructor to make it available.
     * 
     * The code below illustrates the concepts, but tries to navigate to /servers/servers, so we comment it out.
     */
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}

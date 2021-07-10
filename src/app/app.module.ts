import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

/**
 * We set up our routes here, in AppModule.
 * 
 * Each route is an element of the appRoutes array. Each route is a JavaScript object in the array.
 * 
 * Route configuration follows a specific pattern. It always needs a path. The path is a string. So, you can visit the
 * 'users' path by navigating to:
 * 
 *      <yourDomain>/users
 * 
 * We do not add the leading / to the path. So do not make the path value '/users'.
 * 
 * We also define what should happen when this path is reached. This is typically a component. You inform Angular which
 * component should be loaded on this path.
 * 
 * The empty path '' should take us to the HomeComponent in this example app. Although in general you don't need an
 * empty path, you will need to handle the situation where the user visits your domain with no path specified. This is
 * covered later.
 * 
 * 
 */
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    /**
     * 'users/:id' allows us to pass a value dynamically for the id. With this in place, users/<anything> will be
     * interpreted on this path with <anything> assigned as the id.
     * 
     * With this route in place, we can type /users/something and we will navigate to the user page, but we cannot get
     * there by clicking on a user yet.
     */
    path: 'users/:id/:name',
    component: UserComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  /**
   * Add RouterModule to the imports array to give the app routing functionality. forRoot() allows us to register
   * routes.
   */
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

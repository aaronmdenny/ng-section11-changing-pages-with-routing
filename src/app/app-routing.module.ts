import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

/**
 * We set up our routes here, in the routing Module.
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
    /**
     * This first path is for the path with nothing after the domain name. If you were to add a redirect in this path, you
     * would find a problem. This route would ALWAYS redirect the user. This is because Angular's default matching
     * strategy is 'prefix'. What this means is that Angular checks if the path you entered in the URL starts with the
     * path specified in the route. Every path starts with ''.
     * 
     * To fix this, when redirecting from this path, you should change the matching strategy to 'full':
     * 
     * { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
     * 
     * Now, you will only be redirected if the full path is '' (so only if there is no content in the path you enter).
     */
    /**
     * Angular allows us to run some code before a route is loaded, or once you want to leave a route. Do this with
     * route guards.
     */
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent,
      children: [
        {
          /**
           * 'users/:id' allows us to pass a value dynamically for the id. With this in place, users/<anything> will be
           * interpreted on this path with <anything> assigned as the id.
           * 
           * With this route in place, we can type /users/something and we will navigate to the user page, but we cannot get
           * there by clicking on a user yet.
           */
          path: ':id/:name',
          component: UserComponent
        }
      ]
    },
    {
      path: 'servers',
      component: ServersComponent,
      // We can move the routes that will be rendered within the ServersComponent into the children array. In so doing, we
      // remove the leading 'servers'.
      children: [
        {
          path: ':id',
          component: ServerComponent
        },
        {
          path: ':id/edit',
          component: EditServerComponent
        }
      ]
    },
    // We create the not-found path and redirect all paths that the user can enter after / to the not-found path via a
    // redirect.
    {
      path: 'not-found',
      component: PageNotFoundComponent
    },
    // redirectTo is an alternative to the component property. It can be added to any route.
    // The double asterisks will catch all paths that we do not define. This route should always be the last one in your
    // array of routes, otherwise, it would catch the path of one of the routes defined below it.
    {
      path: '**',
      redirectTo: '/not-found'
    }
  ]

  /**
   * Modules are covered later. We create a module for the routes of the app.
   */
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    /**
     * exports tells Angular that if you were to add this module (AppRoutingModule) to the imports of another module,
     * what should be accessible in that module. We want the RouterModule to be accessible there.
     */
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
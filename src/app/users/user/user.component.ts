import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {
    id: number,
    name: string
  };

  /**
   * The ActivatedRoute object contains metadata about the currently activated route. We use it to get the id of the
   * currently loaded user from the route URL.
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      /**
       * The route snapshot property gives a 'snapshot' of our current route. We use this to extract the dynamic
       * parameter 'id' through the params dictionary:
       *    users/:id
       * 
       * Now, we can directly type in the url: /users/<someNumber>/<someUser> and it will work, but these are not real
       * users, it will just display what you enter in the URL.
       */
      /**
       * Retrieving our route parameters in this way partially works. There are ways to break this. There are cases
       * where it will not work.
       * 
       * In the HTML file, we have added a router link to /users/10/Anna. When we click on it, the URL will update, but
       * the text displayed on the page originating from the snapshot params will not update. This is because when you
       * load a route, Angular finds the correct route, loads the component, initializes the component, and gives us the
       * data by accessing the snapshot. This only happens if we haven't been on this component before.
       * 
       * Clicking on the link to Anna takes us to the same route we are already on, so it is the same component we are
       * already on. Angular does not reinstantiate the component in this scenario.
       * 
       * So, we have to use another approach to get new data. It is acceptable to use the snapshot for the first
       * instantiation of the component, but to be able to react to changes, we need a different approach.
       * 
       * We can use the 'params' property on the 'route' object to solve this. The 'params' property is an Observable
       * that we can subscribe to and subsequently update the page data when the route data changes.
       * 
       * If you know the component you are on will never have its data changed, and there is no way to reach the
       * component once you are on that component, then perhaps you would consider using the snapshot, but in other
       * cases, you should subscribe to the Observable.
       * 
       * You can omit the snapshot approach when you are subscribing to the Observable.
       */
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    /**
     * Subscribe can take three arguments. The first argument will be fired whenever new data is sent through the
     * Observable. It is a function that will do something when this happens.
     */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
  }

}

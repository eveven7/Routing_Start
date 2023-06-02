import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.user.id =params ['id'];
        this.user.name =params ['name'];

      }
    ); //easily work with asynchronous task,  observable is an easy wayto subscribe to some event which might happen in the future to then execute some code when it happens without having to wait for it now.
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/services.service';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'femalechristi-front';

  users: any = {};

  constructor(private service: UsersService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(users => {
      this.users = users;
      console.log(this.users)
    } );
  }
}

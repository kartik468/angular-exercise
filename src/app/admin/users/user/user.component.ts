import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../users.service';

@Component({
  selector: 'kar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.user = this.userService.users && this.userService.users.find((user => user.id === id));
      if(!this.user) {
        this.fetchUser(id);
      }
    });
  }

  fetchUser(id: number) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

}

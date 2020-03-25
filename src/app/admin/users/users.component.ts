import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kar-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedUserId: number;

  users: User[];

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.selectedUserId = +paramMap.get('id');
      console.log(this.selectedUserId);
    });
  }

  onUserClick(user: User) {
    this.router.navigate(['../user', user.id], { relativeTo: this.activatedRoute });
  }
}

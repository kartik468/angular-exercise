import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from './../../../custom-validators';

@Component({
  selector: 'kar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  userForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createUserForm();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.user =
        this.userService.users &&
        this.userService.users.find(user => user.id === id);
      if (!this.user) {
        this.fetchUser(id);
      } else {
        this.setInitialValuesToForm();
      }
    });
  }

  fetchUser(id: number) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      this.setInitialValuesToForm();
    });
  }

  createUserForm() {
    this.userForm = this.fb.group({
      id: ['', [Validators.required]],
      name: [
        '',
        [Validators.required, CustomValidators.forbiddenNames(['kartik'])]
      ],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', [Validators.required]]
      }),
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });
  }

  setInitialValuesToForm() {
    this.userForm.patchValue(this.user);
  }

  canDeactivate(): boolean {
    if (this.userForm.dirty) {
      return confirm('Unsaved changes will be discarded');
    } else {
      return true;
    }
  }
}

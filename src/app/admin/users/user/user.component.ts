import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../users.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';

@Component({
  selector: 'kar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  userId: number;

  tdFormUser = {
    name: '',
    email: ''
  };

  userForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // this.createUserFormUsingFormBuilder();
    this.createUserForm();
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.userId = id;
      this.user = this.userService.users && this.userService.users.find(user => user.id === id);
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

  // createUserFormUsingFormBuilder() {
  //   this.userForm = this.fb.group({
  //     id: ['', [Validators.required]],
  //     name: ['', [Validators.required, CustomValidators.forbiddenNames(['kartik'])]],
  //     username: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     address: this.fb.group({
  //       street: ['', [Validators.required]],
  //       city: ['', [Validators.required]],
  //       zipcode: ['', [Validators.required]]
  //     }),
  //     hobbies: this.fb.array([this.fb.control('h1', [Validators.required]), this.fb.control('g1', [Validators.required])]),
  //     phone: ['', [Validators.required]],
  //     website: ['', [Validators.required]]
  //   });
  // }

  createUserForm() {
    this.userForm = new FormGroup({
      id: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      name: new FormControl('', [Validators.required, CustomValidators.forbiddenNames(['kartik'])]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required])
      }),
      hobbies: new FormArray([new FormControl('h1', [Validators.required]), new FormControl('g1', [Validators.required])]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required])
    });
  }

  get hobbiesFormArray() {
    return this.userForm.get('hobbies') as FormArray;
  }

  setInitialValuesToForm() {
    this.userForm.patchValue(this.user);
  }

  onAddHobby() {
    this.hobbiesFormArray.push(new FormControl('', [Validators.required]));
  }

  navigateToUsers() {
    this.router.navigate(['../../users', { id: this.userId }], { relativeTo: this.activatedRoute });
  }

  canDeactivate(): boolean {
    if (this.userForm.dirty) {
      return confirm('Unsaved changes will be discarded');
    } else {
      return true;
    }
  }
}

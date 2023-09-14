import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userInfoForm! : FormGroup
  constructor( private fb : FormBuilder,
    private userService : UserService
    ) { }

  ngOnInit(): void {
    this.inItUserForm()
  }

  inItUserForm(){
    this.userInfoForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      role : ['', Validators.required],
    });
  }

  addUser(){
    this.userService.createUser(this.userInfoForm.value).subscribe((res : any) => {

    })
  }



}

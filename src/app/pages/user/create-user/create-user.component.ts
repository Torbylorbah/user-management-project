import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userInfoForm! : UntypedFormGroup

  emailRegex = `^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$`;

  constructor( private fb : UntypedFormBuilder,
    private userService : UserService,
    private notify : NotificationService
    ) { }

  ngOnInit(): void {
    this.inItUserForm()
  }

  inItUserForm(){
    this.userInfoForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.pattern(this.emailRegex), Validators.required]],
      role : ['', Validators.required],
    });
  }

  addUser(){
    this.userService.createUser(this.userInfoForm.value).subscribe((res : any) => {
      if (res.error) {
        return this.notify.publishMessages('error', 'An error occured' );
      }
      this.notify.publishMessages('success', 'User Successfully Created');

    })
  }



}

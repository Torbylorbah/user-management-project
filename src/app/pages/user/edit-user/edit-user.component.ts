import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editUserForm! : UntypedFormGroup
  userId!: string;
  emailRegex = `^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}$`;

  constructor( private fb : UntypedFormBuilder,
    private userService : UserService,
    private activatedRoute : ActivatedRoute,
    private notify : NotificationService,

    ) { }


    ngOnInit(): void {
      this.inItUserForm();
      this.userId = this.activatedRoute.snapshot.params['id'];
      this.getUserData();


    }


    inItUserForm(){
      this.editUserForm = this.fb.group({
        name : ['', Validators.required],
        email : ['', [Validators.pattern(this.emailRegex), Validators.required]],
        role : ['', Validators.required]
      });
    }


    getUserData(){
      this.userService.getUser(this.userId).subscribe((res : any) =>{
        this.populateForm(res)
      })
    }

    populateForm(data: any){
      this.editUserForm.patchValue({
        name : data?.name?.firstname + data?.name?.lastname,
        email : data?.email,
        role : data?.username,
      })

    }

    editUser(){
      this.userService.editUser(this.editUserForm.value,this.userId).subscribe((res : any) => {
        if (res.error) {
          return this.notify.publishMessages('error', 'An error occured' );
        }
        this.notify.publishMessages('success', 'User Successfully Updated');

      })

    }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  dialogRef: any;
  userId! : string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService : UserService,
    private matDialogRef : MatDialogRef<DeleteUserComponent>,
    private notify : NotificationService

    ) {

    }

  ngOnInit(): void {
    this.userId = this.data.id
  }

  deleteUser(){
    this.userService.deleteUser(this.userId).subscribe((res : any) =>{
      if (res.error) {
        return this.notify.publishMessages('error', 'An error occured' );
      }
      this.notify.publishMessages('success', 'User Successfully Deleted');
      this.matDialogRef.close()
    })
  }


  close() {
    this.dialogRef.close();
  }

}

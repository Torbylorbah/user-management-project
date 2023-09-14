import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    private matDialogRef : MatDialogRef<DeleteUserComponent>

    ) {

    }

  ngOnInit(): void {
    this.userId = this.data.id
    console.log(this.data)
  }

  deleteUser(){
    this.userService.deleteUser(this.userId).subscribe((res : any) =>{
      this.matDialogRef.close()
    })
  }


  close() {
    this.dialogRef.close();
  }

}

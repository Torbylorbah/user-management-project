import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: any;

  constructor(
    private userService : UserService,
    private dialog: MatDialog,
    private router : Router,
    private notify : NotificationService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe((res : any)=>{
      // if (res.error) {
      //   return this.notify.publishMessages('error', res.message);
      // }
      // this.notify.publishMessages('success', res.message);
      this.users = res
     })
  }

  createUser(){
    this.router.navigateByUrl('/users/create')
  }

  deleteUser(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = data
    let dialogRef = this.dialog.open(DeleteUserComponent, dialogConfig);
  }

}

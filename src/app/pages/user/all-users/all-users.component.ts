import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: any;

  @Output() pageChange = new EventEmitter<number>();

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


  config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
  };

  onPageChange(number: number) {
    this.config.currentPage = number;
    this.pageChange.emit(number);
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

 userId! : string;
  details!: any
  constructor(
    private userService : UserService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.getUserData()
  }

  getUserData(){
    this.userService.getUser(this.userId).subscribe((res : any) =>{
      this.details = res
    })
  }

}

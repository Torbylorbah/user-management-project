import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users : any[] | null = null
  constructor(private userService: UserService) { }

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
}

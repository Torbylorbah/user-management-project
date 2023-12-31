import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    LoaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule


  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    LoaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }

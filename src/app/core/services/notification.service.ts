import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from 'src/app/types/shared-types';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  publish(type: 'success' | 'error', message: string) {
    switch (type) {
      case 'success':
        this.toastr.success(message, '');
        break;
      case 'error':
        this.toastr.error(message, '');
        break;
    }
  }

}

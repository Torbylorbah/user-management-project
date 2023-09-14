import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonText!: string
  @Input() buttonStyles?: string
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type?: string;


  @Output() tap = new EventEmitter<boolean>()

  onClick() {
    this.tap.emit(true)
  }
}

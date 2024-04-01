import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-md-preview',
  templateUrl: './md-preview.component.html',
  styleUrls: ['./md-preview.component.css']
})
export class MdPreviewComponent {

  @Input() text!: string;
  @Output() ready!: EventEmitter<string>;

  constructor() {
  }

}

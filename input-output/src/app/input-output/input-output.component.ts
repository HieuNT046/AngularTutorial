import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';

  delete() {
    console.warn('Child says: emitting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}

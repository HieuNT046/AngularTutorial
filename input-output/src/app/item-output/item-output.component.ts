import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrl: './item-output.component.css'
})
export class ItemOutputComponent implements OnInit {
  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  @Output() newItemEvent = new EventEmitter<string>();
}

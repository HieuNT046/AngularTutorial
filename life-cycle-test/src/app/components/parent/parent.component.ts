import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [CommonModule, ChildComponent]
})
export class ParentComponent implements OnInit{
 
  ngOnInit() {
    console.log('ngOnInit from the parent component');
 }
  userName = 'Maria';
 
  updateUser() {
     this.userName = 'Chris';
}}

import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit {
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - \'contentWrapper', this.content);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }
  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  @Input() userName = '';
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === "Chris") {
        this.userName = 'Hello ' + this.userName
      } else {
        this.userName = changes['userName'].previousValue
      }
    }
  }

}

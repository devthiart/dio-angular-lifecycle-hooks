import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() name: string = 'empty';
  constructor() {
    // console.log(`Constructor ${this.name}`);
    this.name = `Hello ${this.name}!`;
  }

  ngOnInit(): void {
    // console.log(`ngOnInit ${this.name}`);
  }

  ngOnChanges(): void {
    // console.log(`ngOnChanges ${this.name}`);
  }

}

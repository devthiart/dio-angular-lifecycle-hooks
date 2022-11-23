import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export default class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantity: number = 0;

  constructor() {

  }

  increment() {
    this.quantity++;
  }

  decrement() {
    this.quantity--;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // Execution order: checked -> content -> view

  // When the first content starts.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // After any change, check the content.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // After view initialization.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // After any change, check the view.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Goodbye my friend...');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent implements OnInit{
  title: string = '';
  message: string = '';


  construcutor() { }

  ngOnInit() {
    this.title = 'Calculator10093';
    this.message = '電卓アプリです。';
  }
}

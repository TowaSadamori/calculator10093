import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent implements OnInit{
  title: string = 'Calculator10093';
  message: string = 'ボタンをクリック';
  count:number = 0;


  construcutor() { }

  ngOnInit() { }
  
  doClick() {
    this.message = ++this.count + "回、クリックしました。";
  }
}

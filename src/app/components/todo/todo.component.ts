import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  isDone1 = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isDone1 = !this.isDone1
  }

}

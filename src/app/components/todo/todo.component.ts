import { Component, OnInit } from '@angular/core';
import { Http, HttpModule,  Headers, RequestOptions } from '@angular/http';
import  'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers: [HttpModule]
})
export class TodoComponent implements OnInit {
  public toDos = []
  public activeCount = 0 ;
  public inactiveCount = 0;
  public todoText;
  host = 'http://192.168.43.35:5000';
  // public count = 0
  constructor(private http: Http) {
    // this.toDos = [{task:'task1',is_done : false},{task:'task2',is_done : false},{task:'task3',is_done : true}]
    // this.totalActive = this.toDos.length
    this.count();
  }
  ngOnInit() {
this.getTodos()

  }
  addToDo() {
    let headers = new Headers({api_key: 'parthjansari@outlook.com'});
    let reqOptions = new RequestOptions({headers: headers});
    this.http.post(this.host + '/api/todos',{task:  this.todoText,is_done: false}, reqOptions).map(res =>  res.json()).subscribe(response => {
      console.log(response)
      this.getTodos()
    })

  this.toDos.push(this.todoText)
  }
  getTodos(){
    let headers = new Headers({api_key: 'parthjansari@outlook.com'});
    let reqOptions = new RequestOptions({headers: headers});
this.http.get(this.host + '/api/todos',reqOptions).map(res => res.json()).subscribe(response => {
  console.log(response)
  this.toDos = response.todos;
  // for(let i =0 ; i < response['todos'].length; i++){
  //   this.toDos.push({task: response['todos'][i].task, is_done: response['todos'].is_done})
  // }
},err => {
  console.log(err)
})
  }

  toggle(index) {
    console.log(index);
    this.toDos[index].is_done = !this.toDos[index].is_done
  //   if(this.toDos[is_done])
  //   {
  //     this.totalActive += 1;
  //   }
  //   else
  //   {
  //     this.totalActive -= 1;
  //   }
  //   console.log(this.totalActive);
  // }
  this.count()
}
count()
{
  let active = 0,inactive = 0;
  for(let i = 0;i < this.toDos.length;i++){
    if(this.toDos[i].is_done){
      active += 1
    }
    else{
      inactive += 1
    }
  }
  this.activeCount = active
  this.inactiveCount = inactive
  console.log(this.activeCount)
 }
}

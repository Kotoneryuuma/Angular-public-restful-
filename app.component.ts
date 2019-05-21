import { HttpService } from './http.service';
import { normalize } from 'path';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks : object;
  detail = {
    title: null,
    description: null
  };
  newTask: any;
  editTask: any;
  deleteTask: any;
  task_id: string;

  Assingment(): void{
    this.getTasksFromService();
  }

  Buttonclick(each_task): void{
    this.detail = each_task;
    console.log(each_task)
  }

  constructor(private _httpService: HttpService){}

  ngOnInit(){ 
    this.newTask = { title : "", description: ""};
  }

  getTasksFromService(){
    this._httpService.getTasks();
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
    });
  }
}















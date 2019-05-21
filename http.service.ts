import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private _http: HttpClient) { 

    }

    // 特定の情報（id など　の情報が入っているときはパラメータを入れればいい）
    getTasks(){
        
        return this._http.get('/tasks');
    }

    postToServer(num){
      return this._http.post('/tasks', num);  
    }

    addTask(newtask){
      return this._http.post('/tasks',newtask)
    }
 
    editTask(editTask){
      console.log(editTask);
      console.log(editTask._id);
      return this._http.put('/tasks/'+editTask._id,editTask)
    }

    deleteTask(task_id){
      console.log(task_id);
      return this._http.delete('/tasks/'+task_id)
    }

  
}

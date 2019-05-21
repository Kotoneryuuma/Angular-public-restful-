import { Component,  Input } from '@angular/core'; // add Input to our imports
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  @Input() taskToShow: any;


  constructor() { }
  @Input() detail_child; 
  

}

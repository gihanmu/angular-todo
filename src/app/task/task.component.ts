import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks : Task[];
  constructor(
    private _taskService:TaskService,
  ) { }

  ngOnInit() {
    this.getAllTasks();
  }


  public getAllTasks(){
    this._taskService.findAll()
    .subscribe(
      data => {
        this.tasks = data;

      }
    )
  }
}

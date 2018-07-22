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
  public isAddNewTask : boolean = false;
  public newTask : Task = new Task();;
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

  public displayAddNewTask(){
    this.isAddNewTask = true;

  }

  public addTask(){
    this.newTask.date = '2018-07-12';
    this.newTask.status = 'new';
    this._taskService.save(this.newTask)
    .subscribe(
      data => {
        alert("New Task Saved Successfully");
        this.isAddNewTask = false;
        this.newTask = null;
        this.getAllTasks();
      }
    )
  }

  public deleteTask(task){
    this._taskService.delete(task)
    .subscribe(
      data => {
        alert("Task deleted successfully");
        this.getAllTasks();

      }
    )

  }
}

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task.component';
import { TaskService } from '../services/task.service';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [HttpModule, HttpClientModule, FormsModule],
      providers: [
        TaskService,
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', () => {
    
  //   expect(component.getAllTasks()).toBeTruthy();
  // });

//   describe('getVideos()', () => {

//     it('should return an Observable<Array<Video>>',
//         inject([TaskService, XHRBackend], (taskService, mockBackend) => {

      

//         taskService.getAllTasks().subscribe((videos) => {
//           expect(videos.length).toBe(3);
         
//         });

//     }));

 
// });

});

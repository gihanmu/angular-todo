import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TaskService]
    });
  });

  const task = {
    "id" : null,
    "title" : "Test",
    "date" : "2018-07-12",
    "status" : "new"
  }

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should have at least one task ', inject([TaskService], (service: TaskService) => {
    service.findAll().subscribe((tasks) => {
      expect(tasks.length).toBeGreaterThan(0);
    })
  }));

  it('should create a new task', inject([TaskService], (service: TaskService) => {
    service.save(task).subscribe((tasks) => {
      expect(tasks.length).toBeGreaterThan(0);
    })
  }));
});

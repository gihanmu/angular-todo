import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskService } from './services/task.service';

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TaskComponent,
    data: { title: 'My Task List' }
  },
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

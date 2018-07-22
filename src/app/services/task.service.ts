import { Injectable , Inject} from '@angular/core';
import { DataService } from './data.service';
import {Http, Response} from '@angular/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TaskService extends DataService {
  private endPointUri = '/tasks';

  constructor(
    @Inject(Http) http: Http
  ) {
    super(http);
   }


   findAll() {
    const url = `${this._baseUrl}${this.endPointUri}`;
    return this.doGetRequest(url, {}, true)
        .map((res: Response) => {
            return <Task[]>res.json();
        })
        .catch((error: Response | any) => {
            return Observable.throw(error);
        });
}

}

export class Task {

    id: number;
    date: string;
    title: string;
    status: string;
  
  
    constructor(
      id: number,
      date: string,
      title: string,
      status: string
    ) {
      this.id = id;
      this.date = date;
      this.title = title;     
      this.status = status;
    }
}
